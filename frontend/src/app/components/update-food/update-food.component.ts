import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  food: Food = new Food();
  submitted = false;
  id : number;

  constructor(private foodService: FoodService, private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.food = new Food();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.foodService.getFood(this.id).subscribe(
      data => {
        console.log(data)
        this.food = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.foodService.updateFood(this.id, this.food).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        this.food = new Food();
        this.route.navigate(['/admin']);
      }
      
    );
  }

}
