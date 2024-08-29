package com.amazon.ata.horizonal.repositories;

import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    public List<Account> findByUser(User user);
    public Optional<Account> findByAccountNumber(String account_number);

}
