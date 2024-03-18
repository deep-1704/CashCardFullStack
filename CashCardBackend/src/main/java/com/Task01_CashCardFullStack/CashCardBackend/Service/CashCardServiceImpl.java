package com.Task01_CashCardFullStack.CashCardBackend.Service;

import com.Task01_CashCardFullStack.CashCardBackend.Dao.CashCardDao;
import com.Task01_CashCardFullStack.CashCardBackend.Entities.CashCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CashCardServiceImpl implements CashCardService{
    private final CashCardDao cashCardDao;

    @Autowired
    public CashCardServiceImpl(CashCardDao cashCardDao1){
        this.cashCardDao = cashCardDao1;
    }
    @Override
    public List<CashCard> getAllCashCards(String owner) {
        return cashCardDao.allCashCards(owner);
    }

    @Override
    public void createCashCard(CashCard cashCard) {
        cashCardDao.saveCashCard(cashCard);
    }

    @Override
    public void updateCashCard(CashCard cashCard) {
        cashCardDao.updateCashCardDao(cashCard);
    }

    @Override
    public void deleteCashCard(int id) {
        cashCardDao.deleteCashCardDao(id);
    }

    @Override
    public CashCard getById(int id) {
        return cashCardDao.findById(id);
    }
}
