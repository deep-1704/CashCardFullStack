package com.Task01_CashCardFullStack.CashCardBackend.Service;

import com.Task01_CashCardFullStack.CashCardBackend.Entities.User;

public interface UserService {
    void createUser(User user);
    User findUserByUsername(String username);
}
