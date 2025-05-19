import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  firstName = 'Jimmy';
  lastName = 'Dao';
  role = 'Software Development and Network Engineering Student';
  motto = 'Just do it.';
}
