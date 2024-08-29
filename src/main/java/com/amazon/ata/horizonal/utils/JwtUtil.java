package com.amazon.ata.horizonal.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.io.Serializable;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class JwtUtil implements Serializable {
    public static long JWT_TOKEN_EXPIRATION = 60 * 60 * 24;

    //load the token from the properties file
    @Value("${jwt.secret}")
    private String secret;

    //get the username from the token
    public String getEmailFromToken(String token){
        return getClaimFromToken(token, Claims::getSubject);
    }

    // get claims from the token
    public <T> T getClaimFromToken(String token, Function<Claims, T> claimResolver) {
        Claims claims = getClaimsFromToken(token);
        return claimResolver.apply(claims);
    }
    private Claims getClaimsFromToken(String token) {

        return Jwts
                .parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();
    }
    //get expiration from the token
    public Date getTokenExpirationDate(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    //check if token has expired
    public boolean isTokenExpired(String token) {
        Date expirationDate = getTokenExpirationDate(token);
        return  expirationDate.before(new Date());
    }

    // generate the token

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("authorities", userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList()));



        return doGenerateToken(claims, userDetails.getUsername());
    }

    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_EXPIRATION*1000))
                .signWith(SignatureAlgorithm.HS256, secret).compact();
    }
    //generate key

    //validate the token
    public boolean validateToken(String token, UserDetails userDetails) {
        String email = getEmailFromToken(token);
        return (email.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
