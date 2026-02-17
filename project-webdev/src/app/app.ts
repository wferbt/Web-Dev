import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card'; // Fix this path!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent], // Import the card here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  handleEvent(msg: string) {
    console.log('Received from child:', msg);
  }
}