import { Component, Input } from '@angular/core';
import { Technologies, Personal } from '../interfaces/project-interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() tech!: Technologies;
  @Input() personal!: Personal;
}
