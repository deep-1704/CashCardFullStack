package com.Task01_CashCardFullStack.CashCardBackend.Service;

import com.Task01_CashCardFullStack.CashCardBackend.Dao.UserDao;
import com.Task01_CashCardFullStack.CashCardBackend.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    private final UserDao userDao;
    @Autowired
    public UserServiceImpl(UserDao userDao1){
        this.userDao = userDao1;
    }
    @Override
    public void createUser(User user) {
        userDao.saveUser(user);
    }

    @Override
    public User findUserByUsername(String username) {
        return userDao.findByUsername(username);
    }
}
