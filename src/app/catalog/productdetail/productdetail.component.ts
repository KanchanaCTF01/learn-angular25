import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
   this.route.params.subscribe(p => {
   this.productId = p.id;
   });
  }

}
