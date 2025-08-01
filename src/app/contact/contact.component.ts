import { Component, Input } from '@angular/core';
import { Contacts } from '../interfaces/project-interfaces';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material-ui.module';
import { MatDialog } from '@angular/material/dialog';
import { PopupThankyouComponent } from '../popup-thankyou/popup-thankyou.component';
import { JsonGetService } from '../services/json-get.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, MaterialModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contacts = {
    linkedin: '',
    github: '',
  };

  blurb: string = '';

  email: string = '';

  constructor(
    public dialog: MatDialog,
    private getDataService: JsonGetService
  ) {}

  ngOnInit() {
    this.getDataService
      .getDataFromUrl('/data/contactData.json')
      .subscribe((data) => {
        this.contacts = data.contacts;
        this.blurb = data.blurb;
        this.email = data.email;
      });
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const dialogRef = this.dialog.open(PopupThankyouComponent);

      // Clear form fields after submission
      form.resetForm();
    }
  }
}
