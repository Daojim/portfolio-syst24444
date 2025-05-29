import { Component, Input } from '@angular/core';
import { Personal } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @Input() personal!: Personal;

  about: string =
    "Hello World, I'm Jimmy. I'm a Software Developer and Networking Engineer Student, but I never had a background in programming prior. I'm in the middle of a career transition where I used to work in the HVAC industry as well as many years in retail. The reason for my transition was because I suffered a lot of injuries in physical labour, so I needed to find another career path that satiated thirst for knowledge and constant need of self improvement. I took a chance with signing up for this program and so far I'm loving the challenges that I've come across with programming. I look forward to learn as much technologies as possible";
}
