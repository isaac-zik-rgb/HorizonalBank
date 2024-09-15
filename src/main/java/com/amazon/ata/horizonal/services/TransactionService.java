package com.amazon.ata.horizonal.services;

import com.amazon.ata.horizonal.dto.AccountResponseDto;
import com.amazon.ata.horizonal.dto.TransactionResponseDto;
import com.amazon.ata.horizonal.dto.TransferFundRequestDto;
import com.amazon.ata.horizonal.dto.TransferFundResponseDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.Transaction;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.repositories.AccountRepository;
import com.amazon.ata.horizonal.repositories.TransactionalRepository;
import com.amazon.ata.horizonal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService {
    @Autowired
    private TransactionalRepository transactionalRepo;
    @Autowired
    private AccountRepository accountService;
     @Autowired
     private UserRepository userRepo;
     private TransferFundRequestDto transferFundRequestDto;


    public List<TransactionResponseDto> getTransactionHistoryByAccount(Long accountId){
        //declare a list
        List<TransactionResponseDto> list = new ArrayList<>();

        // find the account by the id
         Account account = accountService.findById(accountId).get();

         // get the transaction by the account
        for (Transaction transaction: transactionalRepo.findByAccount(account)){
            TransactionResponseDto transactionResponseDto = new TransactionResponseDto();
            transactionResponseDto.setAccountId(transaction.getId());
            transactionResponseDto.setAmount(transaction.getAmount());
            transactionResponseDto.setCategory(transaction.getCategory());
            transactionResponseDto.setDate(transaction.getDate());
            transactionResponseDto.setStatus(transaction.getStatus());
            transactionResponseDto.setSender(transaction.getSender());
            transactionResponseDto.setId(transaction.getId());
            transactionResponseDto.setIsPositive(Boolean.TRUE.equals(transaction.getIsPositive()));
            //find the account of the recipient by accountNumber
            Account recipient = accountService.findByAccountNumber(transaction.getRecipientAccountNumber()).get();

            // find the user by the account
            User user = userRepo.findByAccounts(recipient).get();

            // set the recipient
            transactionResponseDto.setRecipient(user.getFirstName() + " " + user.getLastName());
            list.add(transactionResponseDto);
        }
        return list;
    }


}
