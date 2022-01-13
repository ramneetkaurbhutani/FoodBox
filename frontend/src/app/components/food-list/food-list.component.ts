import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Food } from 'src/app/common/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list-grid.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: Food[] = [];
  currentCuisineId: number = 1;
  previousCuisineId: number = 1;
  searchMode: boolean = false;

  //new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0; 
  
  previousKeyword: string = null;
  
  constructor(private foodService: FoodService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listFoods();
    });
  }

  listFoods() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode) {
      this.handleSearchFoods();
    }
    else {
    this.handleListFoods();
    }
  }

  handleSearchFoods() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // if we have a different keyword than previous
    // then set thePageNumber to 1

    if(this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    //now search for the foods using keyword
    this.foodService.searchFoodsPaginate(this.thePageNumber - 1,
                                          this.thePageSize,
                                          theKeyword).subscribe(this.processResult());
  }

  handleListFoods() {
    //check if "id" parameter is available 
    const hasCuisineId: boolean = this.route.snapshot.paramMap.has("id");

    if(hasCuisineId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCuisineId = +this.route.snapshot.paramMap.get("id");

      //now get the products for the given cuisine id
    // this.foodService.getFoodListById(this.currentCuisineId).subscribe(
    //   data => {
    //     this.foods = data;
    //   }
    // );

    } 
    else {
      //no cuisine id available... default cuisine id 1
        this.currentCuisineId = 1;

      
      // this.foodService.getFoodList().subscribe(
      //   data => {
      //     this.foods = data;
      //   }
      // );
    }

    // check if we have the different cuisine than the previous
    //Note: Angular will reuse the component if it is currently being viewed

    //if we have a different cuisine id than the previous
    //then set the page number back to 1
    if(this.previousCuisineId != this.currentCuisineId){
      this.thePageNumber = 1;
    }

    this.previousCuisineId = this.currentCuisineId;
    console.log(`currentCuisineId=${this.currentCuisineId} , thePageNumber=${this.thePageNumber}`);

    this.foodService.getFoodListByIdPaginate(this.currentCuisineId, 
                                            this.thePageNumber - 1,
                                             this.thePageSize)
                                             .subscribe(this.processResult());
   
  }

  processResult() {
    return data => {
      this.foods = data._embedded.foods;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listFoods();

  }

  addToCart(theFood: Food) {
    console.log(`Adding to cart: ${theFood.name}, ${theFood.unitPrice}`);

    //TODO...do the real work
    const theCartItem = new CartItem(theFood);
    this.cartService.addToCart(theCartItem);
  }


}
