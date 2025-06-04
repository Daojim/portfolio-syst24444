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

  blurb: string = 'Here are links to my social medias: ';

  contactList: Contacts[] = [
    {
      socialName: 'linkedin',
      socialLink: 'https://www.linkedin.com/in/daojim/',
    },
    { socialName: 'github', socialLink: 'https://github.com/daojim' },
  ];
}
