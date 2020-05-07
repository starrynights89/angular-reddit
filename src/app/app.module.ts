import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SearchPostsComponent } from './components/search-posts/search-posts.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostPipe } from 'src/app/pipes/post.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SearchPostsComponent,
    PostsComponent,
    PostListComponent,
    PostPipe,
    AccountComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
