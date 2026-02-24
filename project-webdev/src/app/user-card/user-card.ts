import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css'],
})
export class UserCardComponent {
  // ✅ signal-based input (Angular 17+)
  name = input<string>('Guest');

  // ✅ signal-based output (Angular 17+)
  info = output<string>();

  jobTitle = 'Frontend Developer';

  onDeleteClick() {
    // можешь эмитить что угодно
    this.info.emit(`Deleted user: ${this.name()}`);
  }
}