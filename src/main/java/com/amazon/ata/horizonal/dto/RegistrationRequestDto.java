package com.amazon.ata.horizonal.dto;

public class RegistrationRequestDto {
private String first_name;
private String last_name;
private String password;
private String address;
private String date_of_birth;
private Long postal_code;
private String state;
private String ssn;
private String email;

    public RegistrationRequestDto() {
    }

    public RegistrationRequestDto(String first_name, String last_name, String password,
                                  String address, String date_of_birth, Long postal_code,
                                  String state, String ssn, String email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.address = address;
        this.date_of_birth = date_of_birth;
        this.postal_code = postal_code;
        this.state = state;
        this.ssn = ssn;
        this.email = email;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public Long getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(Long postal_code) {
        this.postal_code = postal_code;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }
}
