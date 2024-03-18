package com.Task01_CashCardFullStack.CashCardBackend.Dao;


import com.Task01_CashCardFullStack.CashCardBackend.Entities.CashCard;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class CashCardDaoImpl implements CashCardDao{
    private EntityManager entityManager;
    @Autowired
    public CashCardDaoImpl(EntityManager em){
        this.entityManager = em;
    }
    @Override
    public List<CashCard> allCashCards(String owner) {
        TypedQuery<CashCard> query = entityManager.createQuery("FROM CashCard where owner = :theOwner", CashCard.class);
        query.setParameter("theOwner", owner);
        return query.getResultList();
    }

    @Override
    @Transactional
    public void saveCashCard(CashCard cashCard) {
        entityManager.persist(cashCard);
    }

    @Override
    @Transactional
    public void updateCashCardDao(CashCard cashCard) {
        entityManager.merge(cashCard);
    }

    @Override
    @Transactional
    public void deleteCashCardDao(int id) {
//        TypedQuery<CashCard> query = entityManager.createQuery("DELETE FROM CashCard where id = :theId", CashCard.class);
//        query.setParameter("theId", id);
//        query.executeUpdate();
        CashCard cashCard = entityManager.find(CashCard.class, id);
        if(cashCard != null){
            entityManager.remove(cashCard);
        }
    }

    @Override
    public CashCard findById(int id) {
        return entityManager.find(CashCard.class, id);
    }
}
