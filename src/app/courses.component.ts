import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <button (click)="toggleVisibility()">Liste ein-/ausblenden</button>
    <div *ngIf="visibilityToggle">
        <ul>
         <li *ngFor="let course of courses">{{course}}</li>
        </ul>
    </div>`
})
export class CoursesComponent{
    public course = new Course();
    private visibilityToggle: boolean = false;

    constructor(private coursesService: CoursesService){
        this.course.thema = "Thema";
        this.course.anzahlTeilnehmer = 25;
    }
    courses = this.coursesService.getCourses();
    title = "List of Courses";

    toggleVisibility(){
        this.visibilityToggle = !this.visibilityToggle;
    }
    
}

class Course {
    public thema: string;
    public anzahlTeilnehmer: number;
}