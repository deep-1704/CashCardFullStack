package com.Task01_CashCardFullStack.CashCardBackend.Controllers;

import com.Task01_CashCardFullStack.CashCardBackend.Entities.CashCard;
import com.Task01_CashCardFullStack.CashCardBackend.Entities.User;
import com.Task01_CashCardFullStack.CashCardBackend.Service.CashCardService;
import com.Task01_CashCardFullStack.CashCardBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final CashCardService cashCardService;
    private final UserService userService;

    @Autowired
    public UserController(CashCardService cashCardService, UserService userService1){
        this.cashCardService = cashCardService;
        this.userService = userService1;
    }

    @GetMapping("/cashCards")
    public ResponseEntity<List<CashCard>> getCashCards(Principal principal){
        List<CashCard> cashCards = cashCardService.getAllCashCards(principal.getName());
        return ResponseEntity.ok(cashCards);
    }

    @PostMapping("/cashCards")
    public ResponseEntity<Void> postCashCard(@RequestBody CashCard cashCard){
        System.out.println(cashCard.toString());
        cashCardService.createCashCard(cashCard);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/cashCards")
    public ResponseEntity<Void> updateCashCard(@RequestBody CashCard cashCard){
        CashCard card = cashCardService.getById(cashCard.getId());
        if(card == null){
            return ResponseEntity.notFound().build();
        }
        cashCardService.updateCashCard(cashCard);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/cashCards/{id}")
    public ResponseEntity<Void> deleteCashCard(@PathVariable int id){
        cashCardService.deleteCashCard(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users/login")
    public ResponseEntity<Void> loginUser(){
        // Spring security automatically sends 403 FORBIDDEN if user does not exist
        return ResponseEntity.ok().build();
    }

    @PostMapping("/users/register")
    public ResponseEntity<Void> registerUser(@RequestBody User user){
        User user1 = userService.findUserByUsername(user.getUsername());
        if(user1 != null){
            return ResponseEntity.status(403).build();
        }
        user.setPassword("{noop}"+user.getPassword());
        userService.createUser(user);
        return ResponseEntity.ok().build();
    }
}
