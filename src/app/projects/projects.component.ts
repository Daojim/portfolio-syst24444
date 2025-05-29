import { Component } from '@angular/core';
import { MaterialModule } from '../modules/material-ui.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Projects } from '../interfaces/project-interfaces';

@Component({
  selector: 'app-projects',
  imports: [MaterialModule, MatCardModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // projectName: Projects = {
  //       title: '',
  //       subtitle: '',
  //       image: '',
  //       description: '',
  //       projectLink: '',
  //       buttonLabel: '',
  //       projectGithub: '',
  //     }

  todolist: Projects = {
    title: 'To-do List',
    subtitle: 'React/TypeScript/Tailwind',
    image: 'images/todolist.png',
    description:
      "A basic to-do list. This was a good learning experience on learning how to deal with React's useState.",
    projectLink: 'https://to-do-list-weld-kappa.vercel.app/',
    buttonLabel: 'To-do!',
    projectGithub: 'https://github.com/Daojim/to-do-list',
  };

  pomodoro: Projects = {
    title: '',
    subtitle: '',
    image: '',
    description: '',
    projectLink: '',
    buttonLabel: '',
    projectGithub: '',
  };
}
