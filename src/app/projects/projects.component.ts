import { Component, Input } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Projects } from '../interfaces/project-interfaces';
import { CardbuttonsService } from '../services/cardbuttons.service';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [CardbuttonsService],
})
export class ProjectsComponent {
  @Input() darkMode: boolean = false;

  @Input() projects!: Projects[];

  constructor(private cardService: CardbuttonsService) {}

  like() {
    this.cardService.likeCard();
  }
}
