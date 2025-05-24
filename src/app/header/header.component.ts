import { Component, Input } from '@angular/core';
import { Personal } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() personal!: Personal;
}
