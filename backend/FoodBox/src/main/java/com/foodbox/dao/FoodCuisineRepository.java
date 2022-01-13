package com.foodbox.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.foodbox.entity.FoodCuisine;

//@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "foodCuisine", path = "food-cuisine")
public interface FoodCuisineRepository extends JpaRepository<FoodCuisine, Long> {
	
	FoodCuisine findByCuisineName(String cuisineName);
}
