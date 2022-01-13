import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  food: Food = new Food();
  submitted = false;
  

  constructor(private foodService: FoodService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.foodService.addFood(this.food).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.food = new Food();
    this.route.navigate(['/admin']);
  }

}
