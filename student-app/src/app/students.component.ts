import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <h2>{{ getTitle() }}</h2>
    <p>{{ getCurrentDate() }}</p>
  `
})
export class StudentsComponent {

  title = "My List of Students";

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }

}