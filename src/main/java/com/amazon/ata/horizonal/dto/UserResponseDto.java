package com.amazon.ata.horizonal.dto;

import java.time.LocalDate;
import java.util.Date;

public class UserResponseDto {
    private String first_name;
    private String last_name;
    private String password;
    private String address;
    private LocalDate date_of_birth;
    private Long postal_code;
    private String state;
    private String ssn;
    private String email;


    public UserResponseDto() {
    }

    private UserResponseDto(Builder builder) {
        this.address = builder.address;
        this.date_of_birth = builder.date_of_birth;
        this.first_name = builder.first_name;
        this.last_name = builder.last_name;
        this.password = builder.password;
        this.state = builder.state;
        this.ssn = builder.ssn;
        this.postal_code = builder.postal_code;
        this.email = builder.email;
    }
    public static Builder builder() {
        return new Builder();
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getPassword() {
        return password;
    }

    public String getAddress() {
        return address;
    }

    public LocalDate getDate_of_birth() {
        return date_of_birth;
    }

    public Long getPostal_code() {
        return postal_code;
    }

    public String getState() {
        return state;
    }
    public String getEmail() { return this.email;}

    public String getSsn() {
        return ssn;
    }

    public static class Builder {
        private String first_name;
        private String last_name;
        private String password;
        private String address;
        private LocalDate date_of_birth;
        private Long postal_code;
        private String state;
        private String ssn;
        private String email;


        public Builder withFirstName(String firstName){
            this.first_name = firstName;
            return this;
        }

        public Builder withLastName(String lastName){
            this.last_name = lastName;
            return this;
        }

        public Builder withPassword(String password){
            this.password = password;
            return this;
        }

        public Builder withAddress(String address){
            this.address = address;
            return this;
        }

        public Builder withDateOfBirth(LocalDate dateOfBirth){
            this.date_of_birth = dateOfBirth;
            return this;
        }
        public Builder withPostalCode(Long postalCode){
            this.postal_code = postalCode;
            return this;
        }
        public Builder withEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder withSNN(String snn){
            this.ssn = snn;
            return this;
        }

        public Builder withState(String state){
            this.state = state;
            return this;
        }
        public UserResponseDto build(){
            return new UserResponseDto(this);
        }
    }
}
