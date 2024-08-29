package com.amazon.ata.horizonal.services;

import com.amazon.ata.horizonal.dto.AccountResponseDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService {
    @Autowired
    private AccountRepository acctRepo;

    public AccountService(){}

    public List<AccountResponseDto>  getAccountByUser(User user){
        List<AccountResponseDto> myList = new ArrayList<>();
        for (Account acct: acctRepo.findByUser(user)){
            AccountResponseDto accountResponseDto = new AccountResponseDto();
            accountResponseDto.setAccount_name(acct.getAccountName());
            accountResponseDto.setAccount_type(acct.getAccountType());
            accountResponseDto.setId(acct.getId());
            accountResponseDto.setAccount_number(acct.getAccountNumber());
            accountResponseDto.setBalance(acct.getBalance());
            accountResponseDto.setCreation_date(acct.getCreationDate());
            accountResponseDto.setActive(acct.getActive());
            myList.add(accountResponseDto);
        }
        return myList.stream().filter(AccountResponseDto::isActive).toList();
    }
    public Account save(Account account) {
        return acctRepo.save(account);
    }

    public AccountResponseDto getAccountById(Long id) {
        Account acct =  acctRepo.findById(id).get();
        AccountResponseDto accountResponseDto = new AccountResponseDto();
        accountResponseDto.setAccount_name(acct.getAccountName());
        accountResponseDto.setAccount_type(acct.getAccountType());
        accountResponseDto.setId(acct.getId());
        accountResponseDto.setAccount_number(acct.getAccountNumber());
        accountResponseDto.setBalance(acct.getBalance());
        accountResponseDto.setCreation_date(acct.getCreationDate());
        accountResponseDto.setActive(acct.getActive());
        return accountResponseDto;

    }

    
}
