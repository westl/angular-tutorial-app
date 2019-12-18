import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  checkoutForm: FormGroup;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm  = this.formBuilder.group({
      name:'',
      address:''
    })
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  onSubmit = (customerData) => {
    console.log('customer data', customerData);
    this.cartItems = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}