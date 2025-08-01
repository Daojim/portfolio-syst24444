import { Component, Input } from '@angular/core';
import { Contacts } from '../interfaces/project-interfaces';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material-ui.module';
import { MatDialog } from '@angular/material/dialog';
import { PopupThankyouComponent } from '../popup-thankyou/popup-thankyou.component';

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

  constructor(public dialog: MatDialog) {}

  onSubmit(form: any): void {
    if (form.valid) {
      const dialogRef = this.dialog.open(PopupThankyouComponent);

      // Clear form fields after submission
      form.resetForm();
    }
  }
}
