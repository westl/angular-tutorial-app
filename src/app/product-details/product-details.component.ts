import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { products } from '../products'; 
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute, private cartService: CartService) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      const index = parseInt(params.get('productId'));
      this.product = products[index];
    })
  }

  addToCart = (product: any) => {
    this.cartService.addItem(product);
  }

}