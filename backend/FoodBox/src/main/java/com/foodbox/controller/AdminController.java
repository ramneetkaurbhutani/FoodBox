package com.foodbox.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.foodbox.dto.FoodItem;
import com.foodbox.entity.Food;
import com.foodbox.service.AdminService;
import com.foodbox.service.AdminServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/foodItem")
	public String addFoodItem(@RequestBody FoodItem foodItem) {
		String msg = adminService.addFoodItem(foodItem);
		return msg;
		
	}
	
	@PutMapping("/food/{id}")
	public String updateFood(@PathVariable Long id, @RequestBody Food food) {
		String msg = adminService.updateFoodItem(food);
		return msg;
	}
	

	
	
}
