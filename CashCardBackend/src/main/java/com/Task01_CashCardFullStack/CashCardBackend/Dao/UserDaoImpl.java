package com.Task01_CashCardFullStack.CashCardBackend.Dao;

import com.Task01_CashCardFullStack.CashCardBackend.Entities.Authorities;
import com.Task01_CashCardFullStack.CashCardBackend.Entities.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao{

    private EntityManager entityManager;
    @Autowired
    public UserDaoImpl(EntityManager entityManager1){
        this.entityManager = entityManager1;
    }

    @Override
    @Transactional
    public void saveUser(User user) {
        entityManager.persist(user);
        Authorities authority = new Authorities(user.getUsername());
        entityManager.persist(authority);
    }

    @Override
    public User findByUsername(String username) {
        TypedQuery<User> query = entityManager.createQuery("FROM User where username = :theUsername", User.class);
        query.setParameter("theUsername", username);
        List<User> users = query.getResultList();
        if(users.isEmpty()) return null;
        return users.getFirst();
    }
}
