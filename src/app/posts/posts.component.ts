import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  data: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (result) => {
        // console.log(result);
        this.data = result;
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  createPost(titleInput: HTMLInputElement) {
    let post: any = { title: titleInput.value };
    titleInput.value = '';
    this.service.createPost(post).subscribe(
      (response) => {
        post['id'] = response.id;
        this.data.splice(0, 0, post);
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        alert('An unexpected error occurred.');
        console.log(error);
      }
    );
  }

  deletePost(post: any) {
    this.service.deletePost('a').subscribe(
      (response) => {
        console.log(response);
        // let index = this.data.indexOf(post);
        // this.data.splice(index, 1);
      },
      (error: Response) => {
        if(error.status === 204)
          alert("This post has already been deleted.");
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
      }
    );
  }
}
