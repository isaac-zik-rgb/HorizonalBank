package com.amazon.ata.horizonal.utils;

import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.DigitalCard;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.enums.AccountTypeEnum;
import com.amazon.ata.horizonal.enums.CardStatusEnum;
import com.amazon.ata.horizonal.enums.CardTypeEnum;
import com.amazon.ata.horizonal.repositories.CardRepository;
import com.amazon.ata.horizonal.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Component
public class PopulateAccount {
    @Autowired
    private  AccountService accountService;
    @Autowired
    private  CardRepository cardRepository;



    public  Account  populateAccount(User user, String acctName){
        Account account = new Account();
        account.setAccountName(acctName);
        account.setAccountType(AccountTypeEnum.STUDENT.name());
        account.setAccountNumber(GenerateUtil.generateAcctNumber());
        account.setActive(true);
        account.setBalance(2698.12);
        account.setUser(user);

        account.setCreationDate(LocalDate.now());
        Account acct =  accountService.save(account);
        //populate digital card
        populateDigitalCards(account);
        return acct;
    }

    private void populateDigitalCards(Account account){
        DigitalCard card = new DigitalCard();
        card.setCardNumber(GenerateUtil.generateCardNumber());
        card.setCardType(CardTypeEnum.DEBIT.name());
        card.setCvv(GenerateUtil.generateCvv());
        card.setAccount(account);
        card.setStatus(CardStatusEnum.ACTIVE.name());
        LocalDate date =    LocalDate.now();
        card.setExpirationDate(date.plusYears(3));
        cardRepository.save(card);

    }
}
