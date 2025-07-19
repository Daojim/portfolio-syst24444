import { Component, Input } from '@angular/core';
import { Contacts } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contacts = {
    linkedin: 'https://www.linkedin.com/in/daojim/',
    github: 'https://github.com/daojim',
  };

  blurb: string = 'Here are links to my social medias: ';

  email: string = 'daojim.dev@gmail.com';
}
