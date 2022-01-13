import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodService } from './services/food.service';
import { HttpClientModule } from '@angular/common/http';
import { FoodCuisineMenuComponent } from './components/food-cuisine-menu/food-cuisine-menu.component';
import { SearchComponent } from './components/search/search.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UpdateFoodComponent } from './components/update-food/update-food.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { AddFoodComponent } from './components/add-food/add-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodCuisineMenuComponent,
    SearchComponent,
    FoodDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    AdminPageComponent,
    HeaderComponent,
    FooterComponent,
    OrderHistoryComponent,
    UpdateFoodComponent,
    OrderSummaryComponent,
    AddFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
