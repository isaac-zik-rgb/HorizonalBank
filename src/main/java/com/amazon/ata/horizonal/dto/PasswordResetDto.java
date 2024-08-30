package com.amazon.ata.horizonal.dto;

public class PasswordResetDto {
    private String new_password;
    private String confirm_password;
    private String email;

    public PasswordResetDto(String confirmPassword, String newPassword, String email) {
        this.confirm_password = confirmPassword;
        this.new_password = newPassword;
        this.email = email;
    }

    public PasswordResetDto() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNew_password() {
        return new_password;
    }

    public void setNew_password(String new_password) {
        this.new_password = new_password;
    }

    public String getConfirm_password() {
        return confirm_password;
    }

    public void setConfirm_password(String confirm_password) {
        this.confirm_password = confirm_password;
    }
}
