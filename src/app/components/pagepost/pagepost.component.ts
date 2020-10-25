import { Component, OnInit } from '@angular/core';
import Author from '../../../domain/author';

@Component({
  selector: 'app-pagepost',
  templateUrl: './pagepost.component.html',
  styleUrls: ['./pagepost.component.scss']
})
export class PagepostComponent implements OnInit {

  authorSelected: Author;

  contentToSearch: string;

  constructor() { }

  ngOnInit(): void {
  }

  setAuthorToFilter(author): void {
    this.authorSelected = author;
  }// setAuthorToFilter()

  setContentToSearch(content): void{
    this.contentToSearch = content;
  }// setContentToSearch()

}
