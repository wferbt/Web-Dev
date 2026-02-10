import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Проверьте путь!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent], // UserProfileComponent должен быть тут
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'project-webdev';
}