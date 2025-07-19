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
    first: 'Jimmy',
    last: 'Dao',
    role: 'Software Development and Network Engineer Student',
    motto: 'Just do it.',
  };

  tech: Technologies = {
    techUsed: 'Technologies used: ',
    tech1: 'Angular',
    tech2: 'Material UI',
    tech3: 'Google Fonts',
    tech4: 'Visual Studio Code',
    tech5: 'Github',
  };

  contacts: Contacts = {
    linkedin: 'https://www.linkedin.com/in/daojim/',
    github: 'https://github.com/daojim',
  };
}
