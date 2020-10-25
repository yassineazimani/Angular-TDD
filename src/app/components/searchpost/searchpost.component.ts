import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { AuthorService } from '../../../services/authorService';
import Author from '../../../domain/author';

@Component({
  selector: 'app-searchpost',
  templateUrl: './searchpost.component.html',
  styleUrls: ['./searchpost.component.scss']
})
export class SearchpostComponent implements OnInit {

  @Output() authorEvent: EventEmitter<Author>;

  @Output() contentEvent: EventEmitter<string>;

  authors$: Observable<Author[]>;

  authorSelected: Author;

  contentToFilter: string;

  debouncer: Subject<string>

  constructor(private authorService: AuthorService) {
    this.authorEvent = new EventEmitter<Author>();
    this.contentEvent = new EventEmitter<string>();
    this.debouncer = new Subject<string>();
  }// constructor()

  ngOnInit(): void {
    this.authors$ = this.authorService.findAll();
    // On va temporiser la saisie utilisateur pour ne pas surcharger le backend :
    this.debouncer
          .pipe(debounceTime(500))
          .subscribe((value) => this.contentEvent.emit(value));
  }// ngOnInit()

  onChangeAuthor(author): void {
    this.authorEvent.emit(author);
  }// onChangeAuthor()

  onChangeContent(content): void {
    this.debouncer.next(content);
  }// onChangeContent()

}// SearchpostComponent
