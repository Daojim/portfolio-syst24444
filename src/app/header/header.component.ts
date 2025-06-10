import { Component, Input } from '@angular/core';
import { Contacts, Personal } from '../interfaces/project-interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() personal!: Personal;
  @Input() contacts!: Contacts;
}
