import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  product = input.required<Product>();

  activeIndex = signal(0);

  activeImage() {
    return this.product().images?.[this.activeIndex()] || this.product().image;
  }

  setImage(index: number) {
    this.activeIndex.set(index);
  }

  onShare() {
    const url = encodeURIComponent(this.product().link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }
}