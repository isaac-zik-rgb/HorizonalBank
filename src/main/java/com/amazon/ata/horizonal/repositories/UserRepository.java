package com.amazon.ata.horizonal.repositories;

import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByAccounts(Account recipient);
}
