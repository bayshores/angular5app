import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.get(id).subscribe(post => {
      this.post = post;
    })
  }

}
