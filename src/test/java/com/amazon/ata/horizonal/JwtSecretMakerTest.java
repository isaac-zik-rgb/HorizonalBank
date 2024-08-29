package com.amazon.ata.horizonal;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.junit.jupiter.api.Test;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import io.jsonwebtoken.Jwts;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class JwtSecretMakerTest {

    @Test
    public void generateSecretKey() throws NoSuchAlgorithmException {
        // Generate a random secret key
        KeyGenerator keyGen = KeyGenerator.getInstance("HmacSHA512");
        SecretKey secretKey = keyGen.generateKey();

        // Convert the key to a string or byte array if needed
        String secretKeyString = java.util.Base64.getEncoder().encodeToString(secretKey.getEncoded());

        // Output the key
        System.out.println("Generated Secret Key: " + secretKeyString);
    }
}
