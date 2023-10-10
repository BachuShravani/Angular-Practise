import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: 'courses',
  template: `<h2>{{title}}</h2>
  <ul>
    <li *ngFor="let course of courses">{{course}}</li>
  </ul>
  <div (click)='onDivClicked()'>
  <button class="btn btn-primary" [class.active]=isActive (click)='onSave($event)'>Save</button>
</div>
<input [(ngModel)]='email' (keyup.enter)="onKeyUp()"/>
<span class="glyphicon glyphicon-star"></span>
  `
})
export class CoursesComponent{
  title = "List of courses";
  courses:string[];
  isActive = true;
  email = 'me@example.com';

  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }

  onSave($event:any){
    console.log("button is clicked", $event);
  }

  onDivClicked(){
    console.log("div is clicked");
  }

  onKeyUp(){
    console.log(this.email);
  }
}
