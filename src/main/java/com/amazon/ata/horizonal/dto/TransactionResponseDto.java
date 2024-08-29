package com.amazon.ata.horizonal.dto;

import java.time.LocalDate;
import java.util.Date;

public class TransactionResponseDto {
    private Long accountId;
    private String recipient;
    private String sender;
    private Double amount;
    private String status;
    private LocalDate date;
    private String category;

    public TransactionResponseDto() {
    }

    public TransactionResponseDto(Long accountId, String recipient, String sender, Double amount, String status,
                                  LocalDate date, String category) {
        this.accountId = accountId;
        this.recipient = recipient;
        this.sender = sender;
        this.amount = amount;
        this.status = status;
        this.date = date;
        this.category = category;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
