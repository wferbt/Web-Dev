import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './products-page.html',
  styleUrls: ['./products-page.css'],
})
export class ProductsPageComponent {}