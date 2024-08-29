package com.amazon.ata.horizonal.services;


import com.amazon.ata.horizonal.dto.TransferFundRequestDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.Transaction;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.enums.TransactionStatusEnum;
import com.amazon.ata.horizonal.enums.TransactionTypeEnum;
import com.amazon.ata.horizonal.exceptions.AccountNotActiveException;
import com.amazon.ata.horizonal.exceptions.NonSufficientAccountBalance;
import com.amazon.ata.horizonal.repositories.AccountRepository;
import com.amazon.ata.horizonal.repositories.TransactionalRepository;
import com.amazon.ata.horizonal.repositories.UserRepository;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.Date;
import java.util.NoSuchElementException;
import java.util.concurrent.Callable;

@Service
public class TransferFundsService implements Callable<String> {

    private  TransferFundRequestDto transferFundRequestDto;
    @Autowired
    private AccountRepository accountRepo;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private TransactionalRepository transactionRepo;
    @Autowired
    private EmailNotificationService emailService;



    public TransferFundsService(){

    }


    // Initialize the class attributes
    public void add(TransferFundRequestDto funds) {
        this.transferFundRequestDto = funds;
    }



    @Override
    public String call() throws Exception {
        try {
            if (transfer()){
                return "Transaction Successful";
            }else {
                return "Transaction failed";
            }
        }catch (Exception e){
            throw new NonSufficientAccountBalance(e.getMessage());
        }


    }


    private boolean transfer(){
        // get the senders account by his account Id
        Account sendersAccount = accountRepo.findById(transferFundRequestDto.getAccountId()).get();


        //get the sender User
        User sender = userRepo.findByAccounts(sendersAccount).get();



        //check if the recipient acctNum is the same as the sender account Number
        String recipientAcctNum = transferFundRequestDto.getRecipientAcctNum();

        //get recipient account
        Account recipientAccount = accountRepo.findByAccountNumber(recipientAcctNum).get();

        //get the recipient User
        User recipient = userRepo.findByEmail(transferFundRequestDto.getRecipientEmail()).get();


        if (recipientAcctNum.equals(sendersAccount.getAccountNumber())) {
            throw new NoSuchElementException("CAN'T SEND MONEY TO YOUR ACCOUNT :" + recipientAcctNum + "IS YOUR ACCOUNT NUMBER");
        }
        if(!(sendersAccount.getActive() && recipientAccount.getActive())){
            throw new AccountNotActiveException("Account is Not Active");
        }



        //call debitAccount: Double amount to withdraw money]
        try {
            Double currentBal = debitAccount(transferFundRequestDto.getAmount(), sendersAccount);

            //populate sender transaction table
            populateTransaction(
                    recipient.getFirstName() +" " + sender.getLastName(),
                    TransactionStatusEnum.SUCCESS.name(),
                    sendersAccount,
                    TransactionTypeEnum.TRANSFER.name(),
                    sender.getFirstName() + " " + sender.getLastName()
            );

            //credit account
            creditAccount(transferFundRequestDto.getAmount(), recipientAccount);

            //populate recipient table
            populateTransaction(
                    sender.getFirstName() + " " + sender.getLastName(),
                    TransactionStatusEnum.SUCCESS.name(),
                    recipientAccount,
                    TransactionTypeEnum.TRANSFER.name(),
                    sender.getFirstName() + " " + sender.getLastName()
            );

            //Send Debit Notification to the sender email
            double bal = sendersAccount.getBalance() + transferFundRequestDto.getAmount();
            emailService.sendEmail(sender.getEmail(), "Debit Alert!!!",
                    "Your transfer of " + transferFundRequestDto.getAmount() + " to " +
                    recipient.getFirstName() + " was Successful!! \n" + " " +
                            "Initial balance: " + bal + "\n" +
                            "Current Balance: " + currentBal + "\n" +
                            "Time: " + new Date() +"\n"
            );


             double currentAmt = recipientAccount.getBalance() + currentBal;

            //Send Credit alert notification to the recipient email
            emailService.sendEmail(recipient.getEmail(), "Credit Alert!!!",
                    "An Amount of " + transferFundRequestDto.getAmount() + " was Transferred to you by "+
                            sender.getFirstName() + " " + sender.getLastName()+"\n" +
                            "Sender email: " + sender.getEmail() + "\n" +
                            "Initial Balance: " + recipientAccount.getBalance() + "\n" +
                            "Current Balance: "  + currentAmt + "\n" +
                            "Time: " + new Date() +"\n"
            );


        }
        catch ( Exception e){
            // call populate transaction table
            populateTransaction(recipient.getFirstName() + " " + recipient.getLastName(),
                    TransactionStatusEnum.DECLINE.name(),
                    sendersAccount,
                    TransactionTypeEnum.TRANSFER.name(),
                    sender.getFirstName() + " " + sender.getLastName()
                    );


            //Send Decline Notification to the sender email
            emailService.sendEmail(sender.getEmail(), "Transfer Declined!!!",
                    "Your transfer of " + transferFundRequestDto.getAmount() +
                    " to "+ recipient.getFirstName() + recipient.getLastName() +
                            " was Decline\n" + "Reason: UnSufficientFund.\n current Balance: "+
                    sendersAccount.getBalance() + "\n" +
                    "Time: " + new Date() +"\n");
            throw new NonSufficientAccountBalance(e.getMessage());
        }
        return true;

    }




    private void populateTransaction(String fullName, String status, Account account, String type,
                                     String sender) {
        Transaction transaction = new Transaction();
        transaction.setAccount(account);
        transaction.setCategory(transferFundRequestDto.getCategory());
        transaction.setTransactionType(type);
        transaction.setAmount(transferFundRequestDto.getAmount());
        transaction.setDate(LocalDate.now());
        transaction.setRemarks(transferFundRequestDto.getRemarks());
        transaction.setRecipientAccountNumber(transferFundRequestDto.getRecipientAcctNum());
        transaction.setStatus(status);
        transaction.setRecipientFullName(fullName);
        transaction.setSender(sender);
        transactionRepo.save(transaction);

    }

    private Double debitAccount(Double amount, Account account) throws NonSufficientAccountBalance {
        if(account.getBalance().compareTo(amount) >= 0 ){
            //account is sufficient, proceed to withdraw
            Double currentBal = account.getBalance() - amount;
            account.setBalance(currentBal);
            accountRepo.save(account);
            return currentBal;
        }else {
            throw new NonSufficientAccountBalance("UnSufficient Account Balance");
        }
    }
    //credit account

    private void creditAccount(double amount, Account account){
        double currentAmt = account.getBalance() + amount;
        account.setBalance(currentAmt);
        accountRepo.save(account);
    }


}
