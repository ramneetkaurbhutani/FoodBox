import { CartItem } from "src/app/common/cart-item";

export class OrderItem {
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    foodId: string;

    constructor(cartItem: CartItem) {
        this.imageUrl = cartItem.imageUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.foodId = cartItem.id;
    }
}
