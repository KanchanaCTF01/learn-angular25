  
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductItemComponent } from '../productitem/productitem.component';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductItemComponent)
  productItems: QueryList<ProductItemComponent>;
  products: Product[];

  constructor(private backendService: BackendService) { 
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
}

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }
  selectedProduct(productComponent: ProductItemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p=> {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}