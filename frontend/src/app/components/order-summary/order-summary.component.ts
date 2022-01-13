import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  orderTrackingNumber: string = '';

  constructor() { }

  ngOnDestroy(): void {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("totalQuantity");
    localStorage.removeItem("response");
    sessionStorage.removeItem("cartItems");
  }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    this.totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    this.totalQuantity = JSON.parse(localStorage.getItem("totalQuantity"));
    this.orderTrackingNumber = JSON.parse(localStorage.getItem("response"));
  }

  

}
