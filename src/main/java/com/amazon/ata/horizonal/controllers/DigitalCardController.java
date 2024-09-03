package com.amazon.ata.horizonal.controllers;

import com.amazon.ata.horizonal.dto.DigitalCardResponseDto;
import com.amazon.ata.horizonal.dto.FreezeCardRequest;
import com.amazon.ata.horizonal.entites.DigitalCard;
import com.amazon.ata.horizonal.entites.User;
import com.amazon.ata.horizonal.enums.CardStatusEnum;
import com.amazon.ata.horizonal.repositories.CardRepository;
import com.amazon.ata.horizonal.repositories.UserRepository;
import com.amazon.ata.horizonal.services.CardService;
import com.amazon.ata.horizonal.utils.Serial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/digital-cards")
@CrossOrigin(origins = "*")
public class DigitalCardController {
    @Autowired
    private CardRepository cardRepo;

    @Autowired
    private CardService cardService;

    @GetMapping
    public ResponseEntity<?> getDigitalCards(@AuthenticationPrincipal User user, @RequestParam Long accountId){
        try {
            return ResponseEntity.ok().body(cardService.getCardsByAccountId(accountId));
        }catch (Exception e){
            return ResponseEntity.status(500).body(Serial.serial(e.getMessage()));
        }

    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateCardStatus(@AuthenticationPrincipal User user, @PathVariable Long id, @RequestBody FreezeCardRequest request){
       //make sure the owner of the card is the only that has the ability to change the status
        if (user.getAccounts().get(0) != null){
            if(!(Objects.equals(user.getAccounts().get(0).getId(), id))){
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Serial.serial("You are not Authorized for this operation"));
            }
        }

        DigitalCardResponseDto dto = new DigitalCardResponseDto();
        try {
           DigitalCard card = cardRepo.findById(id).get();
           if (request.getStatus().trim().equalsIgnoreCase("FREEZE")){
               card.setStatus(CardStatusEnum.FROZEN.name());
               cardRepo.save(card);
           }else if (request.getStatus().trim().equalsIgnoreCase("ACTIVE")){
               card.setStatus(CardStatusEnum.ACTIVE.name());
               cardRepo.save(card);
           }
            dto.setHolderName(user.getFirstName() + " " + user.getLastName());
           dto.setCardType(card.getCardType());
           dto.setCardNumber(card.getCardNumber());
           dto.setCardId(card.getId());
           dto.setCvv(card.getCvv());
           dto.setExpirationDate(card.getExpirationDate());
           dto.setAccountName(card.getAccount().getAccountName());
           dto.setStatus(card.getStatus());
           return ResponseEntity.ok().body(dto);

        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(Serial.serial(e.getMessage()));
        }


    }
}
