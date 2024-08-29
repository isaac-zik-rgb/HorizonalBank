package com.amazon.ata.horizonal.repositories;

import com.amazon.ata.horizonal.entites.DigitalCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<DigitalCard, Long> {


}
