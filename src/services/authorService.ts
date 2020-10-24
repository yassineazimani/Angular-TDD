import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Author from '../domain/author';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthorService{

  constructor(private http: HttpClient){
  }// constructor()

  /**
   * Récupère la totalité des auteurs.
   * @return Observable<Author[]>
   */
  findAll(): Observable<Author[]> {
    return this.http.get<any>(environment.endpointAuthors)
                    .pipe(
                      map<any, Author[]>(data => data.map(author => new Author(author.id, author.name, author.username))),
                    );
  }// findAll()

  /**
   * Récupère un auteur en fonction de son identifiant
   * @param id: Identifiant de l'auteur à récupérer
   * @return Observable<Author>
   */
  findById(id: Number): Observable<Author> {
    return this.http.get<any>(environment.endpointAuthors)
                      .pipe(
                        filter((author: any) => author.id === id),
                        map<any, Author>(data => data.map(author => new Author(author.id, author.name, author.username))),
                      );
  }// findById()

}// AuthorService
