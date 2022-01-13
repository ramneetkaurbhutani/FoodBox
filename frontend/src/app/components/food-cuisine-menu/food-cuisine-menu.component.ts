import { FoodCuisine } from './../../common/food-cuisine';
import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';

@Component({
  selector: 'app-food-cuisine-menu',
  templateUrl: './food-cuisine-menu.component.html',
  styleUrls: ['./food-cuisine-menu.component.css']
})
export class FoodCuisineMenuComponent implements OnInit {

  foodCuisines: FoodCuisine[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.listFoodCuisines();
  }

  listFoodCuisines() {

    this.foodService.getFoodCuisines().subscribe(
      data => {
        console.log('Food Cuisines = ' + JSON.stringify(data));
        this.foodCuisines = data;
      }
    );

  }

}
