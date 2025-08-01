import { Component, Input } from '@angular/core';
import { Personal } from '../interfaces/project-interfaces';
import { CommonModule } from '@angular/common';
import { JsonGetService } from '../services/json-get.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Input() personal!: Personal;

  about: string = '';

  skills: string[] = [];

  constructor(private getDataService: JsonGetService) {}

  ngOnInit() {
    this.getDataService
      .getDataFromUrl('/data/aboutData.json')
      .subscribe((data) => {
        this.about = data.about;
        this.skills = data.skills;
      });
  }
}
