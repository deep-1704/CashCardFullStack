package com.Task01_CashCardFullStack.CashCardBackend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "authorities")
public class Authorities {
    @Id
    @Column(name = "username")
    private String username;
    @Id
    @Column(name = "authority")
    private final String authority = "ROLE_owner";
    public Authorities(){super();}

    public Authorities(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Authorities{" +
                "username='" + username + '\'' +
                ", authority='" + authority + '\'' +
                '}';
    }
}
