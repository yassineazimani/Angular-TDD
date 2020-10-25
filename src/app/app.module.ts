import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { SearchpostComponent } from './components/searchpost/searchpost.component';
import { PagepostComponent } from './components/pagepost/pagepost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    SearchpostComponent,
    PagepostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
