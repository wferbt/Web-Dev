import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing-module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductsPageComponent,
    ProductListComponent // 👈 ВАЖНО
  ],
})
export class ProductsModule {}