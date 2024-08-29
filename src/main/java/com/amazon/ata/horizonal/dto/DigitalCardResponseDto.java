package com.amazon.ata.horizonal.dto;

import java.time.LocalDate;
import java.util.Date;

public class DigitalCardResponseDto {
    private Long cardId;
    private String cardNumber;
    private String accountName;
    private String holderName;
    private String cardType;
    private LocalDate expirationDate;
    private int cvv;
    private String status;

    public DigitalCardResponseDto() {
    }

    public DigitalCardResponseDto(Long cardId, String cardNumber, String accountName,
                                  String holderName, String cardType, LocalDate expirationDate,
                                  int cvv, String status) {
        this.cardId = cardId;
        this.cardNumber = cardNumber;
        this.accountName = accountName;
        this.holderName = holderName;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
        this.status = status;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getHolderName() {
        return holderName;
    }

    public void setHolderName(String holderName) {
        this.holderName = holderName;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public LocalDate getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
