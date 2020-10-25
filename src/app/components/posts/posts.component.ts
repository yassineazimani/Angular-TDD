import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { PostService } from '../../../services/postService';
import { AuthorService } from '../../../services/authorService';
import Post from '../../../domain/post';
import Author from '../../../domain/author';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnChanges {

  posts: Post[];

  authors: Author[];

  colors: any;

  @Input() authorSelected: Author;

  @Input() contentToSearch: string;

  constructor(private postService: PostService, private authorService: AuthorService) {
    this.posts = [];
    this.authors = [];
    this.colors = [];
  }// constructor()

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe({ 
        next: (posts) => {
          this.posts = posts;
          this.colors = posts.map(post => ({ id: post.id, color: this.generateRandomColor() }));
        },
        error: (errors) => console.error(errors)
      });
    this.authorService.findAll()
          .subscribe({ next: authors => this.authors = authors, error: errors => console.error(errors) });
  }// ngOnInit()

  ngOnChanges(changes: SimpleChanges): void{
    this.postService.findAll(this.contentToSearch)
          .subscribe({
            next:
              (posts) => {
              this.posts = this.authorSelected && typeof this.authorSelected !== 'string' ?
                              posts.filter(post => post.userId === this.authorSelected.id) : posts;
              this.colors = posts.map(post => ({ id: post.id, color: this.generateRandomColor() }));
            },
            error: errors => console.error(errors)
        });
  }// ngOnChanges()

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
