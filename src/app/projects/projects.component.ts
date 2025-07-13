import { Component, Input } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Projects } from '../interfaces/project-interfaces';
import { CardbuttonsService } from '../services/cardbuttons.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [CardbuttonsService],
})
export class ProjectsComponent {
  @Input() darkMode: boolean = false;
  @Input() projects!: Projects[];

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }

  filteredData: Projects[] = [];
  inputText: string = '';

  filterProjects() {
    if (this.inputText === '') {
      this.filteredData = this.projects;
    } else {
      this.filteredData = [];
      for (let project of this.projects) {
        if (project.title.toLowerCase() === this.inputText.toLowerCase()) {
          this.filteredData.push(project);
        }
      }
    }
  }
}
