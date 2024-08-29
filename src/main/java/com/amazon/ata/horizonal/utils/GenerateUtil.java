package com.amazon.ata.horizonal.utils;

import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class GenerateUtil {

    public static String generateAcctNumber(){
        SecureRandom secureRandom = new SecureRandom();

        // Generate a random 10-digit number
        long accountNumber = 1000000000L + (long)(secureRandom.nextDouble() * 9000000000L);
        return String.format("%010d", accountNumber);
    }

    public static int generateCvv() {
        SecureRandom secureRandom = new SecureRandom();

        // Generate a random 3-digit number (100 to 999)
        return  secureRandom.nextInt(900) + 100;

    }
    public static String generateCardNumber(){
        SecureRandom secureRandom = new SecureRandom();

        // Generate a random 10-digit number
        long cardNumber = 1000000000000000L + (long)(secureRandom.nextDouble() * 9000000000000000L);
        return String.format("%016d", cardNumber);
    }


}
