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

  constructor(private cardService: CardbuttonsService) {}

  like(elem: any) {
    this.cardService.likeCard(elem);
  }

  projects: Projects[] = [
    {
      id: 1,
      important: true,
      title: 'To-do List',
      subtitle: 'React/TypeScript/Tailwind',
      image: 'images/todolist.png',
      imageAlt: 'To-do list screenshot',
      imageWidth: '500',
      description:
        "A basic to-do list. This was a good learning experience on learning how to deal with React's useState.",
      projectLink: 'https://to-do-list-weld-kappa.vercel.app/',
      buttonLabel: 'To-do!',
      projectGithub: 'https://github.com/Daojim/to-do-list',
    },
    {
      id: 2,
      important: true,
      title: 'Pomodoro',
      subtitle: 'React/JS',
      image: 'images/pomodoro.png',
      imageAlt: 'Pomodoro screenshot',
      imageWidth: '500',
      description:
        'A pomodoro web app. I wanted to make my own Pomodoro to help me stay focused.',
      projectLink: 'https://pomodoro-lac-ten.vercel.app/',
      buttonLabel: 'Focus!',
      projectGithub: 'https://github.com/Daojim/pomodoro',
    },
    {
      id: 3,
      important: false,
      title: 'Calculator',
      subtitle: 'HTML/CSS/JS',
      image: 'images/calculator.png',
      imageAlt: 'Calculator screenshot',
      imageWidth: '300',
      description:
        'A typical calculator project. I made this for The Odin Project when I was going through it and it taught me quite a bit on thinking about how to do arithmetics with programming.',
      projectLink: 'https://daojim.github.io/calculator/',
      buttonLabel: 'Calculate!',
      projectGithub: 'https://github.com/Daojim/calculator',
    },
    {
      id: 4,
      important: false,
      title: 'Etch-a-sketch',
      subtitle: 'HTML/CSS/JS',
      image: 'images/etchasketch.png',
      imageAlt: 'Etch-a-sketch screenshot',
      imageWidth: '400',
      description: 'An etch-a-sketch webpage to test mouse hover.',
      projectLink: 'https://daojim.github.io/etch-a-sketch/',
      buttonLabel: 'Draw!',
      projectGithub: 'https://github.com/Daojim/etch-a-sketch',
    },
    {
      id: 5,
      important: true,
      title: 'Pokedex',
      subtitle: 'Python/Flask/PokeAPI',
      image: 'images/pokedex.png',
      imageAlt: 'Pokedex soonscreenshot',
      imageWidth: '500',
      description:
        'My Pokedex project. The goal of this project is to learn more intereacting with API and I wanted more practice with Python.',
      projectLink: 'https://pokedex-jvah.onrender.com/',
      buttonLabel: 'Search!',
      projectGithub: 'https://github.com/Daojim/pokedex',
    },
  ];

  filteredData: Projects[] = this.projects;
  inputText: string = '';

  filterProjects() {
    if (this.inputText === '') {
      this.filteredData = this.projects;
    } else {
      this.filteredData = [];
      for (let project of this.projects) {
        if (
          project.title.toLowerCase().includes(this.inputText.toLowerCase())
        ) {
          this.filteredData.push(project);
        }
      }
    }
  }
}
