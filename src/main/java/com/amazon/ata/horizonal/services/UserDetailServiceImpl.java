package com.amazon.ata.horizonal.services;

import com.amazon.ata.horizonal.dto.RegistrationRequestDto;
import com.amazon.ata.horizonal.dto.UserResponseDto;
import com.amazon.ata.horizonal.entites.Authority;
import com.amazon.ata.horizonal.enums.AuthorityEnum;
import com.amazon.ata.horizonal.exceptions.EmailNotFoundException;
import com.amazon.ata.horizonal.filters.JwtFilter;
import com.amazon.ata.horizonal.repositories.AuthorityRepository;
import com.amazon.ata.horizonal.repositories.UserRepository;
import com.amazon.ata.horizonal.utils.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import com.amazon.ata.horizonal.entites.User;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthorityRepository authorityRepo;

    @Autowired
    private CustomPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> userOpt = userRepository.findByEmail(email);
        return userOpt.orElseThrow(() -> new EmailNotFoundException("Invalid Credentials"));
    }

    public User save(RegistrationRequestDto newUser){
        // Build User
        User user = new User();
        user.setAddress(newUser.getAddress());
        user.setFirstName(newUser.getFirst_name());
        user.setLastName(newUser.getLast_name());
        user.setEmail(newUser.getEmail());
        user.setPassword(passwordEncoder.getPasswordEncoder().encode(newUser.getPassword()));

        user.setDateOfBirth(LocalDate.parse(newUser.getDate_of_birth()));
        user.setSsn(newUser.getSsn());
        user.setPostalCode(newUser.getPostal_code());
        user.setState(newUser.getState());

        User myUser = userRepository.save(user);
        Authority authority = new Authority(AuthorityEnum.ROLE_User.name(),
                userRepository.findByEmail(myUser.getEmail()).get());
        authorityRepo.save(authority);

        // build userResponse
        return myUser;

    }
}
