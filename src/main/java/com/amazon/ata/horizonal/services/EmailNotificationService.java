package com.amazon.ata.horizonal.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EmailNotificationService {
    @Autowired
    private JavaMailSender mailSender;
    public boolean sendEmail(String recipientEmail, String transactionNotification, String s) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(recipientEmail);
            message.setSubject(transactionNotification);
            message.setText(s);
            message.setSentDate(new Date());
            message.setFrom("isaacokechukwu200021@gmail.com");
            mailSender.send(message);
            return true;
        }catch (Exception e){
            return false;
        }

    }

}
