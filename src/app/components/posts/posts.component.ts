import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

  getPosts(): Post[] {
    return this.posts;
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    })
  }

  removePost(post: Post) {
    if (confirm('Are you sure?')) {
      this.postService.delete(post.id)
        .subscribe(() => {
          this.posts.forEach((cur, index) => {
            if (post.id === cur.id) {
              this.posts.splice(index, 1);
            }
          })
        })
    }
  }

  editPost(post: Post) {
    this.isEdit = true;
    this.currentPost = post;
  }
}
