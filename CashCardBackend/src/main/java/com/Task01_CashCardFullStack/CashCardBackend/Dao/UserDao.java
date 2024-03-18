package com.Task01_CashCardFullStack.CashCardBackend.Dao;

import com.Task01_CashCardFullStack.CashCardBackend.Entities.User;

public interface UserDao {
    void saveUser(User user);
    User findByUsername(String username);
}
