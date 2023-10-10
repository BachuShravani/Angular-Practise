import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input() isLiked!:boolean;
  @Input() likesCount!:number;
  @Output() like = new EventEmitter()

  onLiked(){
    this.like.emit();
  }

}
