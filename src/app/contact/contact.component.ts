import { Component, Input } from '@angular/core';
import { Contacts } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() contacts!: Contacts;
  linkedinLink = 'https://www.linkedin.com/in/daojim/';
  githubLink = 'https://github.com/Daojim/';
}
