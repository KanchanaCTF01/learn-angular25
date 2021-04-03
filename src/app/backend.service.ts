import { Injectable, QueryList, ViewChildren } from '@angular/core';
import { Product } from './models/product'
import { ProductItemComponent } from './catalog/productitem/productitem.component';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  products: Product[];
  constructor() { }

  getProducts(): Product[] {
    this.products = [];
    this.products.push({
    name: 'Orange',
    price: 990
    });
    this.products.push({
    name: 'Watermelon',
    price: 1000
    });
    this.products.push({
    name: 'Coconut',
    price: 500
    });
    return [];
    }
}
