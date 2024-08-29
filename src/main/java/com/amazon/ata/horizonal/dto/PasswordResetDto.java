package com.amazon.ata.horizonal.dto;

public class PasswordResetDto {
    private String newPassword;
    private String confirmPassword;
    private String email;

    public PasswordResetDto(String confirmPassword, String newPassword, String email) {
        this.confirmPassword = confirmPassword;
        this.newPassword = newPassword;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
