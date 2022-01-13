package com.foodbox.service;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.dao.FoodCuisineRepository;
import com.foodbox.dao.FoodRepository;

import com.foodbox.dto.FoodItem;
import com.foodbox.entity.Food;
import com.foodbox.entity.FoodCuisine;
import com.foodbox.entity.OrderItem;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private FoodCuisineRepository foodCuisineRepository;
	
	@Autowired
	private FoodRepository foodRepository;

	@Override
	@Transactional
	public String addFoodItem(FoodItem foodItem) {
		// retrieve the food info from dto
		Set<Food> foods = foodItem.getFoods();
		
		// retrieve the food cuisine info
		FoodCuisine foodCuisine = foodItem.getFoodCuisine();
		
		// check if food cuisine is present
		String theCuisineName = foodCuisine.getCuisineName();
		FoodCuisine foodCuisineFromDb = foodCuisineRepository.findByCuisineName(theCuisineName);
		
		if( foodCuisineFromDb != null ) {
			
			// we found them--let's assign it accordingly
			foodCuisine = foodCuisineFromDb;
		}
		
		
		// save the food and food cuisine to database
		foodCuisine.setFoods(foods);
		foodCuisineRepository.save(foodCuisine);
		
		
		return "Food item is successfully added";
	}

	@Override
	@Transactional
	public String updateFoodItem(Food food) {
		Food tempFood = foodRepository.getById(food.getId());
		tempFood.setId(food.getId());
		tempFood.setImageUrl(food.getImageUrl());
		tempFood.setUnitsInStock(food.getUnitsInStock());
		tempFood.setActive(food.isActive());
		tempFood.setCuisine(food.getCuisine());
		tempFood.setDescription(food.getDescription());
		tempFood.setName(food.getName());
		tempFood.setUnitPrice(food.getUnitPrice());
		foodRepository.save(tempFood);
		return "Food item updated";
	}

	@Override
	@Transactional
	public String deleteFoodItem(Long id) {
		foodRepository.deleteById(id);
		
		return "Food item deleted";
	}

	

}
