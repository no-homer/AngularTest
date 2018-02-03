import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }
  
  getCourses(): string[]{
    return ["course 1", "course 2", "course 3"];
  }

}
