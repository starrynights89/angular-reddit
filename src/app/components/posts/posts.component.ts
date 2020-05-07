import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article/article.model';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsHeader = `Reddit Clone Posts`;

  searchFilter = ``;

  postList: Article[];
  private postListJson = `[
    {
      "title": "spring",
      "link": "www.spring.com",
      "votes": 123456
    },
    {
      "title": "hibernate",
      "link": "www.hibernate.com",
      "votes": 54
    },
    {
      "title": "Coronavirus",
      "link": "www.covid19.com",
      "votes": 2000
    },
    {
      "title": "Java",
      "link": "www.java.com",
      "votes": 2943
    },
    {
      "title": "Angular",
      "link": "www.angular.com",
      "votes": 9999
    }
  ]`;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postList = JSON.parse(this.postListJson);
    console.log(this.postList);
  }

}
