package com.amazon.ata.horizonal.entites;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "transactions")
public class Transaction {

    //Database Table columns
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "is_Positive")
    private boolen isPositive;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "category")
    private String category;

    @Column(name = "remarks")
    private String remarks;

    @ManyToOne(optional = false)
    private Account account;

    @Column(name = "recipient_account_number")
    private String recipientAccountNumber;

    @Column(name = "status")
    private String status;

    @Column(name = "recipient_name")
    private String recipientFullName;

    @Column(name = "sender")
    private String sender;

    public Transaction() {
    }

    public Transaction(Long id,  boolean isPositive, String transactionType, Double amount, LocalDate date,
                       String category, String remarks,
                       Account account, String recipientAccountNumber, String status,
                       String recipientFullName, String sender
    ) {
        this.id = id;
        this.isPositive = isPositive;
        this.transactionType = transactionType;
        this.amount = amount;
        this.date = date;
        this.category = category;
        this.remarks = remarks;
        this.account = account;
        this.recipientAccountNumber = recipientAccountNumber;
        this.status = status;
        this.recipientFullName = recipientFullName;
        this.sender = sender;

    }

    public String getRecipientFullName() {
        return recipientFullName;
    }

    public void setRecipientFullName(String recipientFullName) {
        this.recipientFullName = recipientFullName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
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

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getRecipientAccountNumber() {
        return recipientAccountNumber;
    }

    public void setRecipientAccountNumber(String recipientAccountNumber) {
        this.recipientAccountNumber = recipientAccountNumber;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getSender() {
        return sender;
    }

    public void setIsPositive(boolean isPositive) { this.isPositive = isPositive; }

    public boolean getIsPositive() { return this.isPositive; }
}
