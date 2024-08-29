package com.amazon.ata.horizonal.dto;


import lombok.Data;


public class TransferFundRequestDto {
    private Long accountId;
    private String remarks;
    private String recipientEmail;
    private String recipientAcctNum;
    private Double amount;
    private String category;

    public TransferFundRequestDto() {
    }

    public TransferFundRequestDto(Long id, String remarks, String recipientEmail, String recipientAcctNum,
                                  Double amount,
                                  String category) {
        this.accountId = id;
        this.remarks = remarks;
        this.recipientEmail = recipientEmail;
        this.recipientAcctNum = recipientAcctNum;
        this.amount = amount;
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getRecipientEmail() {
        return recipientEmail;
    }

    public void setRecipientEmail(String recipientEmail) {
        this.recipientEmail = recipientEmail;
    }

    public String getRecipientAcctNum() {
        return recipientAcctNum;
    }

    public void setRecipientAcctNum(String recipientAcctNum) {
        this.recipientAcctNum = recipientAcctNum;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
