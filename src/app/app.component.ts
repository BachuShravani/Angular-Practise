import { Component } from '@angular/core';
import { onFavouriteChangedArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = '';
  // //Favorite
  // post = {
  //   isFavorite : true
  // }

  // onFavoriteChange(eventArgs : onFavouriteChangedArgs){
  //   console.log('Favorite changed' , eventArgs);
  // }

  // //Like
  // tweet = {
  //   message: 'Here is you tweet..',
  //   isLiked: false,
  //   countLikes: 0
  // }

  // onLikeChange(){
  //   this.tweet.isLiked = !this.tweet.isLiked;
  //   if(this.tweet.isLiked){
  //     this.tweet.countLikes++;
  //   }
  //   else{
  //     this.tweet.countLikes--;
  //   }
  // }
  // courses=[];

  // viewMode = 'list';

  // courses:any;

  // onAdd(){
  //   this.courses = [{id:1, name: "course1"},
  // {id:2, name: "course2"},
  // {id:3, name: "course3"}];
  // }

  // // onRemove(course:any){
  // //   let index= this.courses.indexOf(course);
  // //   this.courses.splice(index,1);
  // // }
  // trackCourse(index:number,course:any){
  //   return course? course.id: undefined;
  // }
}
