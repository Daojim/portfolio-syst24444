import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  Personal,
  Contacts,
  Technologies,
} from './interfaces/project-interfaces';
import { JsonGetService } from './services/json-get.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MaterialModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';

  darkMode: boolean = false;

  mydata: Personal = {
    first: '',
    last: '',
    role: '',
    motto: '',
  };

  tech: Technologies = {
    techUsed: '',
    tech1: '',
    tech2: '',
    tech3: '',
    tech4: '',
    tech5: '',
  };

  contacts: Contacts = {
    linkedin: '',
    github: '',
  };

  constructor(private getDataService: JsonGetService) {}

  ngOnInit() {
    this.getDataService
      .getDataFromUrl('/data/personalData.json')
      .subscribe((data) => {
        this.mydata = data.personal;
        this.contacts = data.contacts;
      });

    this.getDataService
      .getDataFromUrl('/data/technologiesData.json')
      .subscribe((data) => {
        this.tech = data.technologies;
      });
  }
}
