import { Food } from "./food";

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(food: Food) {
        this.id = food.id;
        this.name = food.name;
        this.imageUrl = food.imageUrl;
        this.unitPrice = food.unitPrice;
        
        this.quantity = 1;
    }
}
