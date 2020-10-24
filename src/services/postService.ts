import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  findAll(toSearch?: string): Observable<Post[]> {
    return this.http.get<any>(environment.endpointPosts)
                    .pipe(
                      map<any, Post[]>(
                      (posts) => {
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
  findById(id: Number): Observable<Post> {
    return this.http.get<any>(environment.endpointPosts)
                        .pipe(
                          filter((post: Post) => post.id === id),
                          map<any, Post>(post => new Post(post.userId, post.id, post.title, post.body)),
                        );
  }// findById()

}// PostService
