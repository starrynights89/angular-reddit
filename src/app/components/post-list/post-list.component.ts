import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/article/article.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input()
  postList: Article[];

  constructor() { }

  ngOnInit(): void {
  }

}
