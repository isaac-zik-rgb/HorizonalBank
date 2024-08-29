package com.amazon.ata.horizonal.dto;

import java.util.Date;

public class TransferFundResponseDto {
    private String recipientName;
    private String amount;
    private String transactionType;
    private String recipientAcctName;
    private String recipientAcctNum;
    private Date TransactionDate;

    public TransferFundResponseDto() {
    }

    public TransferFundResponseDto(String recipientName, String amount, String transactionType, String recipientAcctName, String recipientAcctNum, Date transactionDate) {
        this.recipientName = recipientName;
        this.amount = amount;
        this.transactionType = transactionType;
        this.recipientAcctName = recipientAcctName;
        this.recipientAcctNum = recipientAcctNum;
        TransactionDate = transactionDate;
    }

    public String getRecipientName() {
        return recipientName;
    }

    public void setRecipientName(String recipientName) {
        this.recipientName = recipientName;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getRecipientAcctNum() {
        return recipientAcctNum;
    }

    public void setRecipientAcctNum(String recipientAcctNum) {
        this.recipientAcctNum = recipientAcctNum;
    }

    public String getRecipientAcctName() {
        return recipientAcctName;
    }

    public void setRecipientAcctName(String recipientAcctName) {
        this.recipientAcctName = recipientAcctName;
    }

    public Date getTransactionDate() {
        return TransactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        TransactionDate = transactionDate;
    }
}
