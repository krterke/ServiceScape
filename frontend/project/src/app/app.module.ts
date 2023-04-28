import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryProductsComponent } from './category-products/category-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {FormsModule,  ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    CategoryListComponent,
    CategoryProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    AdComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
