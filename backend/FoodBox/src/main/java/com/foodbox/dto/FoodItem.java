package com.foodbox.dto;

import java.util.Set;

import com.foodbox.entity.Food;
import com.foodbox.entity.FoodCuisine;

import lombok.Data;

@Data
public class FoodItem {
	
	private FoodCuisine foodCuisine;
	private Set<Food> foods;
}
