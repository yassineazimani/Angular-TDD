import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../../services/postService';
import { AuthorService } from '../../../services/authorService';
import Post from '../../../domain/post';
import Author from '../../../domain/author';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  posts: Post[];

  authors: Author[];

  colors: any;

  constructor(private postService: PostService, private authorService: AuthorService) {
    this.posts = [];
    this.authors = [];
    this.colors = [];
  }// constructor()

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe((posts) => {
        this.posts = posts;
        this.colors = posts.map(post => ({ id: post.id, color: this.generateRandomColor() }));
      });
    this.authorService.findAll()
          .subscribe(authors => this.authors = authors);

  }// ngOnInit()

  getAuthorNameById(userId: Number): string {
    const author = this.authors.find(author => author.id === userId);
    return author ? author.name : '';
  }// getAuthorNameById()

  getColorByPostId(postId: Number): string {
    const post = this.colors.find(post => post.id === postId);
    return post ? post.color : 'yellow';
  }// getColorByPostId()

  generateRandomColor(): string {
    const colors = ['blue', 'yellow', 'red', 'green'];
    const idx = Math.floor(Math.random() * 4);
    return colors[idx];
  }// generateRandomColor()

}// PostsComponent
