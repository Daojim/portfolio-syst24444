import { Component, Input } from '@angular/core';
import { Contacts } from '../interfaces/project-interfaces';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material-ui.module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, MaterialModule],
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

  contactName: string = '';
  contactEmail: string = '';
  contactComment: string = '';

  onSubmit(form: any): void {
    if (form.valid) {
      // Test with alert for now
      alert('Thank you for your comment');

      // Clear the form
      this.contactName = '';
      this.contactEmail = '';
      this.contactComment = '';

      // Reset form validation state
      form.resetForm();
    }
  }
}
