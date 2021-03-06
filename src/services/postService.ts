import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Post from '../domain/post';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class PostService{

  constructor(private http: HttpClient){}

  /**
   * Récupère la totalité des posts.
   *
   * @param toSearch Valeur à rechercher au niveau du titre ou du corps du post (optionnel)
   * @return Observable<Post[]>
   */
  findAll = (authorId?: Number, toSearch?: string): Observable<Post[]> => {
    const endpoint = authorId ? `${environment.endpointPosts}?userId=${authorId}` 
                              : environment.endpointPosts;
    return this.http.get(endpoint)
                    .pipe(
                      map(
                      (posts: Post[]) => {
                          const tmp = toSearch ? posts.filter(post => post.title.includes(toSearch) || post.body.includes(toSearch)) : posts;
                          return tmp.map(post => new Post(post.userId, post.id, post.title, post.body))
                        }
                      ),
                    );
  }// findAll()

  /**
   * Récupère un post en fonction de son identifiant.
   *
   * @param id Identifiant du post à récupérer
   * @return Observable<Post>
   */
  findById = (id: Number): Observable<Post> => {
    return this.http.get(environment.endpointPosts)
                        .pipe(
                          filter((post: Post) => post.id === id),
                          map(post => new Post(post.userId, post.id, post.title, post.body)),
                        );
  }// findById()

}// PostService
