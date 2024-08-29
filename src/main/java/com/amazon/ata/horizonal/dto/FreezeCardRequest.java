package com.amazon.ata.horizonal.dto;

public class FreezeCardRequest {
    private String status;

    public FreezeCardRequest() {
    }

    public FreezeCardRequest(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
