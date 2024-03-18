package com.Task01_CashCardFullStack.CashCardBackend.Service;

import com.Task01_CashCardFullStack.CashCardBackend.Entities.CashCard;

import java.util.List;

public interface CashCardService {
    List<CashCard> getAllCashCards(String owner);
    void createCashCard(CashCard cashCard);
    void updateCashCard(CashCard cashCard);
    void deleteCashCard(int id);
    CashCard getById(int id);
}
