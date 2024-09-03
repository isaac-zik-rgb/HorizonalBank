package com.amazon.ata.horizonal.controllers;

import com.amazon.ata.horizonal.dto.TransactionResponseDto;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.services.TransactionService;
import com.amazon.ata.horizonal.utils.Serial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/report")
@CrossOrigin(origins = "*")
public class ReportController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    public ResponseEntity<?> getTransactionReport(@AuthenticationPrincipal User user,
                                                  @RequestParam Long accountId,
                                                  @RequestParam  String startDate,
                                                  @RequestParam String endDate){
        //find all transactions that the account has
        try {
            System.out.println("testsing");
            List<TransactionResponseDto> report = transactionService.getTransactionHistoryByAccount(accountId);
            LocalDate startDt = LocalDate.parse(startDate);
            LocalDate endDt = LocalDate.parse(endDate);

            List<TransactionResponseDto> result = report.stream().
                    filter(dto -> dto.getDate().isEqual(startDt) ||
                            dto.getDate().isAfter(startDt) &&
                            dto.getDate().isEqual(endDt) ||
                            dto.getDate().isBefore(endDt)).toList();
            return ResponseEntity.ok().body(result);

        }catch (Exception e){
            ResponseEntity.status(500).body(Serial.serial(e.getMessage()));
        }

        return null;
    }
}
