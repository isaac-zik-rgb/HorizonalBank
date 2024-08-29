package com.amazon.ata.horizonal.dto;

public class LoginResponse {
    private Long id;
    private String token;

    public LoginResponse() {
    }

    public LoginResponse(Long id, String token) {
        this.id = id;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
