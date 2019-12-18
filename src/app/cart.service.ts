import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CartService {
  items: any[] = [];
  constructor(private http: HttpClient) {}

  addItem = (itemToAdd: any) => {
    if (!itemToAdd) {
      return;
    }
    this.items.push(itemToAdd);
  };

  getItems = () => {
    return this.items;
  };

  removeItem = (itemToRemove: any) => {
    if (!itemToRemove) {
      return;
    }
    const indexToRemove = this.items.findIndex(
      currentItem => currentItem.id === itemToRemove.id
    );
    this.items.splice(indexToRemove, 1);
  };

  clearCart = () => {
    this.items = [];
    return this.items;
  };

  getShippingPrices = () => {
    return this.http.get("/assets/shipping.json");
  };
}
