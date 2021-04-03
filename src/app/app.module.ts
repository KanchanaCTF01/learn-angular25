import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './catalog/productlist/productlist.component';
import { ProductDetailComponent } from './catalog/productdetail/productdetail.component';
import { PageNotFoundComponent } from './home/pagenotfound/pagenotfound.component';


  const routes: Routes = [
    {
    path: 'home',
    component: HomeComponent
    },
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: 'products',
    component: ProductListComponent
    },
    {
    path: 'products/:id',
    component: ProductDetailComponent
    },
    {
    path: '**',
    component: PageNotFoundComponent
    }
   ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
    ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})

   export class AppModule { }
