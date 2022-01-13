package com.foodbox.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	Customer findByEmail(String theEmail);
}
