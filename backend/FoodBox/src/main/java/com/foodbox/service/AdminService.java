package com.foodbox.service;

import java.util.List;

import com.foodbox.dto.FoodItem;
import com.foodbox.entity.Food;

public interface AdminService {
	
	String addFoodItem(FoodItem foodItem);
	
	String updateFoodItem(Food food);
	
	String deleteFoodItem(Long id);
	
	
}
