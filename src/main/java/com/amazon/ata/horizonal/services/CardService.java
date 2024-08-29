package com.amazon.ata.horizonal.services;

import com.amazon.ata.horizonal.dto.DigitalCardResponseDto;
import com.amazon.ata.horizonal.entites.Account;
import com.amazon.ata.horizonal.entites.DigitalCard;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.enums.CardStatusEnum;
import com.amazon.ata.horizonal.repositories.AccountRepository;
import com.amazon.ata.horizonal.repositories.CardRepository;
import com.amazon.ata.horizonal.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository cardRepo;
    @Autowired
    private AccountRepository accountRepo;
    @Autowired
    private UserRepository userRepo;


    public List<DigitalCardResponseDto> getCardsByAccountId(Long accountId) {
        List<DigitalCardResponseDto> list = new ArrayList<>();

        Optional<Account> account = accountRepo.findById(accountId);
        DigitalCardResponseDto dto = new DigitalCardResponseDto();
        if (account.isPresent()){
            for(DigitalCard card: account.get().getDigitalCards().
            stream().filter(card -> card.getStatus().
                            equals(CardStatusEnum.ACTIVE.name())).
                    toList()){
                dto.setCardNumber(card.getCardNumber());
                dto.setCardType(card.getCardType());
                dto.setAccountName(card.getAccount().getAccountName());
                dto.setCvv(card.getCvv());
                dto.setStatus(card.getStatus());
                dto.setCardId(card.getId());
                dto.setExpirationDate(card.getExpirationDate());
                //get the holder name
                User holderName = userRepo.findByAccounts(card.getAccount()).get();
                dto.setHolderName(holderName.getFirstName() + " " +
                        holderName.getLastName());
                list.add(dto);
            }
        }
        return list;
    }
}
