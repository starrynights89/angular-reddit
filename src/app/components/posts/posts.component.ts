import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article/article.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsHeader = `Reddit Clone Posts`;
  
  searchFilter = ``;

  postList: Article[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    
    console.log(this.postList);
  }

}
