import { Component, Input } from '@angular/core';
import { Personal } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Input() personal!: Personal;
}
