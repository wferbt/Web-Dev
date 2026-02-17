import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true, // Newer Angular projects (like yours) use standalone by default
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCardComponent implements OnInit {
  @Input() name: string = 'User';
  @Output() info = new EventEmitter<string>();

  ngOnInit() {
    console.log('Card loaded');
  }

  handleClick() {
    this.info.emit('Clicked!');
  }
}