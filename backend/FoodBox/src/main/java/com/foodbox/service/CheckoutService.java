package com.foodbox.service;

import com.foodbox.dto.Purchase;
import com.foodbox.dto.PurchaseResponse;

public interface CheckoutService {
	
	PurchaseResponse placeOrder(Purchase purchase);
}
