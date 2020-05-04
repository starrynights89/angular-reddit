import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements OnInit {

  @Input()
  searchFilter = ``;

  @Output()
  searchFilterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
