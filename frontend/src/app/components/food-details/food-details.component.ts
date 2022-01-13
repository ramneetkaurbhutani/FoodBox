import { Food } from 'src/app/common/food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from './../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';



@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {

  food: Food = new Food();

  constructor(private foodService: FoodService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleFoodDetails();
    });

  }

  handleFoodDetails() {

    // get the "id" param string and convert it into a number using "+" symbol
    const theFoodId: number = +this.route.snapshot.paramMap.get("id");
    this.foodService.getFood(theFoodId).subscribe(
      data => {
        this.food = data;
      }
    );
  }

  addToCart() {

    console.log(`Adding to cart: ${this.food.name}, ${this.food.unitPrice}`);
    const theCartItem = new CartItem(this.food);
    this.cartService.addToCart(theCartItem);
  }

}
