package com.amazon.ata.horizonal.controllers;

import com.amazon.ata.horizonal.dto.TransferFundRequestDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.services.EmailNotificationService;
import com.amazon.ata.horizonal.services.TransactionService;
import com.amazon.ata.horizonal.services.TransferFundsService;
import com.amazon.ata.horizonal.utils.Serial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@RestController
@RequestMapping("api/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;
    @Autowired
    private TransferFundsService transferFundsService;

    /**
     * getTransactionByAcct: Return a list of transaction histories for an account
     * @accountId: the account id that will be passed in the query
     */
    @GetMapping
    public ResponseEntity<?> getTransactionByAcct(@AuthenticationPrincipal User user, @RequestParam Long accountId) {
        try {
            if (user != null){
                return ResponseEntity.ok().body(transactionService.
                        getTransactionHistoryByAccount(accountId));
            }else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not Authorised");
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Serial.serial(e.getMessage()));
        }
    }

    @PostMapping("/transfer")
    public ResponseEntity<?> transferFunds(@RequestBody TransferFundRequestDto funds, @AuthenticationPrincipal User user){
        if (user != null){

            // the user that is login is the owner of the accountId
           List<Account> accountList = user.getAccounts();
            transferFundsService.add(funds);
            try {
                Optional<Account> account = accountList.stream().filter(account1 -> account1.getId().
                        equals(funds.getAccountId())).findAny();
                account.get();
                ExecutorService service = Executors.newCachedThreadPool();
                Future<String> future = service.submit(transferFundsService);

                String message = future.get();

                service.shutdown();
                return ResponseEntity.ok().body(message);
            }catch (Exception e){
                return ResponseEntity.status(500).body(Serial.serial(e.getMessage()));
            }


        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("User Is not Authorised"));
        }
    }
}
