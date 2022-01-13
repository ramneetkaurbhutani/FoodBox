
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { OKTA_CONFIG, OktaAuthModule, OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
import { LoginComponent } from './components/login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UpdateFoodComponent } from './components/update-food/update-food.component';
import { AddFoodComponent } from './components/add-food/add-food.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);

    // redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'cuisine/:id', component: FoodListComponent},
  {path: 'orderSummary', component: OrderSummaryComponent, canActivate:[OktaAuthGuard]},
  {path: 'order-history', component: OrderHistoryComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'admin', component: AdminPageComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'addFood', component: AddFoodComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'updateFood/:id', component: UpdateFoodComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'foods/:id', component: FoodDetailsComponent},
  {path: 'search/:keyword', component: FoodListComponent},
 
 
  {path: 'cuisine', component: FoodListComponent},
  {path: 'foods', component: FoodListComponent},
  {path: '', redirectTo: '/foods', pathMatch: 'full'},
  {path: '**', redirectTo: '/foods', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
              OktaAuthModule],
  exports: [RouterModule],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }]
})
export class AppRoutingModule { }
