package com.amazon.ata.horizonal.controllers;

import com.amazon.ata.horizonal.dto.*;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.exceptions.EmailNotFoundException;
import com.amazon.ata.horizonal.repositories.UserRepository;
import com.amazon.ata.horizonal.services.UserDetailServiceImpl;
import com.amazon.ata.horizonal.utils.JwtUtil;
import com.amazon.ata.horizonal.utils.PopulateAccount;
import com.amazon.ata.horizonal.utils.Validate;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Optional;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserDetailServiceImpl userDetailService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PopulateAccount populateAccount;
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequestDto requestDto){
                      //verified Email
        if (!Validate.isEmailValid(requestDto.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email does not follow a valid format");
        }

                        //Verify Password
        if (!Validate.isPasswordValid(requestDto.getPassword().trim())) {
            System.out.println(requestDto.getPassword());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password must be 8 character long with combination of lowerCase," +
                    " UpperCase, numbers and special character");
        }


                    //verify SSN
        if (!Validate.isSSNValid(requestDto.getSsn())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("SSN does not follow a valid format, e.g(333-33-333)");
        }

                //Verify a valid Birthday
        if (!Validate.isBirthDayValid(requestDto.getDate_of_birth())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("date_of_birth does not follow a valid format. e.g (yyy-mm-dd)");
        }


                    //Validate a valid Postal code
        if (!Validate.isPostalCodeValid(requestDto.getPostal_code())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("PostalCode does not follow a valid format. e.g(10000)");
        }

       try  {

           // Using Executor service
           ExecutorService service = Executors.newCachedThreadPool();
           User user = userDetailService.save(requestDto);


           //populate userResponse
           UserResponseDto responseDto =  UserResponseDto.builder()
                   .withAddress(user.getAddress())
                   .withDateOfBirth(user.getDateOfBirth())
                   .withFirstName(user.getFirstName())
                   .withLastName(user.getLastName())
                   .withPassword(user.getPassword())
                   .withPostalCode(user.getPostalCode())
                   .withSNN(user.getSsn())
                   .withState(user.getState())
                   .withEmail(user.getEmail())
                   .build();
           Future<Account> future = service.submit(() -> populateAccount.populateAccount(user, "Horizonal Bank"));

           // Wait for the result and get it
        Account account = future.get(); // This will block until the result is available

        // Process the result
        System.out.println(account.getAccountName());

        // Shutdown the service after the task is complete
        service.shutdown();

        // Return successful response
        return ResponseEntity.ok().body(responseDto);

       }catch(Exception e){
           System.err.println(e.getMessage());
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email Already Exist!");
       }

    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try{
            Authentication authentication  =  authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(), loginRequest.getPassword()
                    )
            );
            User user = (User) authentication.getPrincipal();
            user.setPassword(null);
            //get token

            String token = jwtUtil.generateToken(user);
            LoginResponse loginResponse = new LoginResponse();
            loginResponse.setId(user.getId());
            loginResponse.setToken(token);
            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.AUTHORIZATION,
                            token
                    ).body(loginResponse);
        }catch (BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token, @AuthenticationPrincipal User user){
            try {
                if (user != null) {


                    //validate token
                    boolean valid = jwtUtil.validateToken(token, user);
                    System.out.println(valid);
                    return ResponseEntity.ok().body(String.format("{ valid: %s, \n userId: %dl}",valid, user.getId()));
                }else {

                    System.out.println(false);
                    return ResponseEntity.ok().body(false);
                }
            }catch (ExpiredJwtException e){

                return ResponseEntity.ok().body(false);
            }

    }
    @GetMapping("/password/reset")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email){
        if (email != null && !email.isBlank()){
            try{
                UserDetails user =  userDetailService.loadUserByUsername(email);
                return ResponseEntity.ok().body("User Found In the Database!");
            }catch (UsernameNotFoundException e){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No User Found!");
            }

        }
        return ResponseEntity.status(400).body("email can not be null");
    }

    @PutMapping("/password/reset")
    public ResponseEntity<?> resetPassword(@RequestBody PasswordResetDto resetDto) {
        if (resetDto.getNewPassword().equals(resetDto.getConfirmPassword())){
            try {

                User user = userRepo.findByEmail(resetDto.getEmail()).get();
                user.setPassword(resetDto.getNewPassword());
                userRepo.save(user);
                return ResponseEntity.ok().body("Password Successfully Updated");
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No User Found with the provided Email");
            }

        }
        return ResponseEntity.status(400).body("Password do not match");
    }
}
