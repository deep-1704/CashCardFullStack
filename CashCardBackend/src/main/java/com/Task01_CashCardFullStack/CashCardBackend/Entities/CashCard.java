package com.Task01_CashCardFullStack.CashCardBackend.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "cashCards")
public class CashCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "owner")
    private String owner;
    @Column(name = "name")
    private String name;
    @Column(name = "amount")
    private int amount;

    public CashCard(){super();};
    public CashCard(String owner, String name, int amount) {
        this.owner = owner;
        this.name = name;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "CashCard{" +
                "id=" + id +
                ", owner='" + owner + '\'' +
                ", name='" + name + '\'' +
                ", amount=" + amount +
                '}';
    }
}
