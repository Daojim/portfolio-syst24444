import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Projects } from '../interfaces/project-interfaces';
import { CardbuttonsService } from '../services/cardbuttons.service';
import { FormsModule } from '@angular/forms';
import { JsonGetService } from '../services/json-get.service';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [CardbuttonsService, JsonGetService],
})
export class ProjectsComponent {
  @Input() darkMode: boolean = false;
  isBrowser: boolean;

  constructor(
    private cardService: CardbuttonsService,
    private getDataService: JsonGetService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  jsonData: any;
  url = '/data/projectsData.json';
  filteredData: Projects[] = [];

  projectData: Projects[] = [];
  ngOnInit() {
    this.getDataService.getDataFromUrl(this.url).subscribe((data) => {
      console.log('JSON data loaded:', data);
      this.jsonData = data;
      this.projectData = this.jsonData.projects;
      this.filteredData = this.projectData;
      console.log('Project data:', this.projectData);
      console.log('Filtered data:', this.filteredData);
    });
  }

  like(elem: any) {
    this.cardService.likeCard(elem);
  }

  inputText: string = '';

  filterProjects() {
    if (this.inputText === '') {
      this.filteredData = this.projectData;
    } else {
      this.filteredData = [];
      for (let project of this.projectData) {
        if (
          project.title.toLowerCase().includes(this.inputText.toLowerCase())
        ) {
          this.filteredData.push(project);
        }
      }
    }
  }
}
