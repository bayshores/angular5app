import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() updatedPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() newPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Input() currentPost: Post;
  @Input() isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if(!title || !body) {
      alert('Please add post');
    } else {
      this.postService.create({title,body} as Post)
        .subscribe(post => {
          this.newPost.emit(post);
        })
    }
  }

  updatePost() {
    this.postService.update(this.currentPost)
      .subscribe(updatedPost => {
        console.log(updatedPost);
        this.isEdit = false;
        this.updatedPost.emit(updatedPost);
      })
  }
}
