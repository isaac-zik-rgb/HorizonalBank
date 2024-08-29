package com.amazon.ata.horizonal.dto;

import java.time.LocalDate;
import java.util.Date;

public class AccountResponseDto {
    private Long id;
    private String account_name;
    private Double balance;
    private String account_number;
    private boolean isActive;
    private String account_type;
    private LocalDate creation_date;

    public AccountResponseDto() {
    }

    public AccountResponseDto(Long id, String account_name, Double balance, String account_number,
                              boolean isActive, String account_type, LocalDate creation_date) {
        this.id = id;
        this.account_name = account_name;
        this.balance = balance;
        this.account_number = account_number;
        this.isActive = isActive;
        this.account_type = account_type;
        this.creation_date = creation_date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccount_name() {
        return account_name;
    }

    public void setAccount_name(String account_name) {
        this.account_name = account_name;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public String getAccount_number() {
        return account_number;
    }

    public void setAccount_number(String account_number) {
        this.account_number = account_number;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getAccount_type() {
        return account_type;
    }

    public void setAccount_type(String account_type) {
        this.account_type = account_type;
    }

    public LocalDate getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(LocalDate creation_date) {
        this.creation_date = creation_date;
    }
}
