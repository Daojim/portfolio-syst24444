import { Component } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
