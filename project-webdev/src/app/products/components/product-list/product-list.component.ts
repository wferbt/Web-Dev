import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  shareWhatsApp(p: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${p.link}`)}`;
    window.open(url, '_blank');
  }

  shareTelegram(p: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }

  onShare(p: Product) {
    // можно выбрать один вариант или открыть мини-меню — пока сделаем Telegram
    this.shareTelegram(p);
  }
}