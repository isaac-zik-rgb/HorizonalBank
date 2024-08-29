package com.amazon.ata.horizonal.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "accounts")
public class Account {
    //Database Table column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "account_name")
    private String accountName;

    @Column(name = "creation_date")
    private LocalDate creationDate;

    @Column(name = "balance")
    private Double balance;

    @ManyToOne(optional = false)
    private User user;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "account")
    @JsonIgnore
    private List<Transaction> transactions;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "account")
    @JsonIgnore
    private List<DigitalCard> digitalCards;

    @Column(name = "account_type")
    private String accountType;

    @Column(name = "is_active")
    private Boolean isActive;

    public Account() {
    }

    public Account(Long id, String accountNumber, String accountName, LocalDate creationDate, Double balance, User user, String accountType, Boolean isActive) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.creationDate = creationDate;
        this.balance = balance;
        this.user = user;
        this.accountType = accountType;
        this.isActive = isActive;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public List<DigitalCard> getDigitalCards() {
        return digitalCards;
    }

    public void setDigitalCards(List<DigitalCard> digitalCards) {
        this.digitalCards = digitalCards;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
