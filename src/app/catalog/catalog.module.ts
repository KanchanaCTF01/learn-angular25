import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../catalog/productitem/productitem.component';
import { ProductListComponent } from '../catalog/productlist/productlist.component';
import { BackendService } from '../backend.service';
import { ProductDetailComponent } from './productdetail/productdetail.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent
  ],

  imports: [
    CommonModule
  ],

  providers: [BackendService
  ],

  exports: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class CatalogModule { }
