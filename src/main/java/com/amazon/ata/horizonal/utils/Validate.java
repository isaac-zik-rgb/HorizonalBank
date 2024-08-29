package com.amazon.ata.horizonal.utils;

import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class Validate {

    public static boolean isEmailValid(String email) {


        String emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        Pattern p = Pattern.compile(emailRegex);
            Matcher matcher = p.matcher(email);
        return matcher.matches();
    }

    public static boolean isPasswordValid(String password){

        String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
        Pattern p = Pattern.compile(passwordRegex);
        Matcher matcher = p.matcher(password);
        return matcher.matches();
    }

    public static boolean isBirthDayValid(String birth_day){
        String regex = "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$";
        Pattern p = Pattern.compile(regex);
        Matcher matcher = p.matcher(birth_day);
        return matcher.matches();
    }
    public static boolean isSSNValid(String ssn){
        String regex = "^\\d{3}-\\d{2}-\\d{4}$";
        Pattern p = Pattern.compile(regex);
        Matcher m = p.matcher(ssn);
        return m.matches();
    }
    public static boolean isPostalCodeValid(Long postal_code){
        return postal_code >= 10000 && postal_code <= 99999;
    }
}
