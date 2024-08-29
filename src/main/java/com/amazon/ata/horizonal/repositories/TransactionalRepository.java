package com.amazon.ata.horizonal.repositories;

import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TransactionalRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByAccount(Account account);

}
