import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { PagginationComponent } from './components/paggination/paggination.component';
import { TopItemComponent } from './components/home/top-item/top-item.component';
import { SingleProductComponent } from './components/products/single-product/single-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NavBarComponent,
    PagginationComponent,
    TopItemComponent,
    SingleProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
