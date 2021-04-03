import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './maincontent/maincontent.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MainContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    MainContentComponent,
    PageNotFoundComponent
  ]

})
export class HomeModule { }
