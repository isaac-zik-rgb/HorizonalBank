package com.amazon.ata.horizonal.controllers;

import com.amazon.ata.horizonal.dto.AccountResponseDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.repositories.AccountRepository;
import com.amazon.ata.horizonal.services.AccountService;
import com.amazon.ata.horizonal.utils.GenerateUtil;
import com.amazon.ata.horizonal.utils.PopulateAccount;
import com.amazon.ata.horizonal.utils.Serial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AccountController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private PopulateAccount populateAccount;
    @Autowired
    private AccountRepository acctRepo;

    @GetMapping("/accounts")
    public ResponseEntity<?> getUserAccount(@AuthenticationPrincipal User user) {
        if (user != null){
            System.out.println(user.getFirstName());
            return ResponseEntity.ok().body(accountService.getAccountByUser(user));
        }else{
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("User is not Authorised"));
        }


    }

    /**
     * GetAccountById: return an account based on the account Id
     */
    @GetMapping("/accounts/{id}")
    public ResponseEntity<?> getAccountById(@AuthenticationPrincipal User user, @PathVariable Long id){
        try {

        if (user != null) {
            return ResponseEntity.ok(accountService.getAccountById(id));
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("User not Unauthorized"));
        }
        }catch (Exception e){
            System.err.println(e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }

    @GetMapping("/accounts/add")
    public ResponseEntity<?> addAccount(@AuthenticationPrincipal User user){
        if (user != null){
            Account acct = populateAccount.populateAccount(user, "Chase Bank");
            AccountResponseDto accountResponseDto = new AccountResponseDto();
            accountResponseDto.setAccount_name(acct.getAccountName());
            accountResponseDto.setAccount_type(acct.getAccountType());
            accountResponseDto.setId(acct.getId());
            accountResponseDto.setAccount_number(acct.getAccountNumber());
            accountResponseDto.setBalance(acct.getBalance());
            accountResponseDto.setCreation_date(acct.getCreationDate());
            accountResponseDto.setActive(acct.getActive());
            return ResponseEntity.ok().body(accountResponseDto);
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("User is not Authorised"));
        }
    }
    @DeleteMapping("/accounts/{id}")
    public ResponseEntity<?> safeDeleteAccount(@AuthenticationPrincipal User user, Long id){
        try{
            if (user != null){
                Account acct = acctRepo.findById(id).get();
                acct.setActive(false);

                return ResponseEntity.ok().body(accountService.save(acct));
            }else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("User is notAuthenticated"));
            }
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }

}
