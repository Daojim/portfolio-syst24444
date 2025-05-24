import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MatCardModule } from '@angular/material/card';
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
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  mydata: Personal = {
    first: 'Jimmy',
    last: 'Dao',
    role: 'Software Development and Network Engineer Student',
    motto: 'Just do it.',
  };

  contacts: Contacts = {
    linkedin: 'https://www.linkedin.com/in/daojim/',
    github: 'https://github.com/daojim',
  };

  tech: Technologies = {
    tech1: 'Angular',
    tech2: 'Material UI',
    tech3: 'Google Fonts',
    tech4: 'Visual Studio Code',
    tech5: 'Github',
  };
}
