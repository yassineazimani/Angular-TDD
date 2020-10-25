import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthorService } from '../../../services/authorService';
import { SearchpostComponent } from './searchpost.component';

describe('SearchpostComponent', () => {
  let component: SearchpostComponent;
  let fixture: ComponentFixture<SearchpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpostComponent ],
      imports: [ HttpClientModule, FormsModule ],
      providers: [ AuthorService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an input text to search by title or content with id searchByContent', () => {
    expect(fixture.nativeElement.querySelector('input#searchByContent').innerHtml).not.toBeNull();
  });

  it('should display a label for input search by title or content', () => {
    expect(fixture.nativeElement.querySelector('label[for="searchByContent"]').innerHtml).not.toBeNull();
  });

  it('Label for input search by title or content should be Rechercher par titre :', () => {
    expect(fixture.nativeElement.querySelector('label[for="searchByContent"]').innerText).toBe('Rechercher par titre :');
  });

  it('should display a select to search by author with id searchByAuthor', () => {
    expect(fixture.nativeElement.querySelector('select#searchByAuthor').innerHtml).not.toBeNull();
  });

  it('should display a label for select search by author', () => {
    expect(fixture.nativeElement.querySelector('label[for="searchByAuthor"]').innerHtml).not.toBeNull();
  });

  it('Label for select search by author should be Rechercher par auteur :', () => {
    expect(fixture.nativeElement.querySelector('label[for="searchByAuthor"]').innerText).toBe('Rechercher par auteur :');
  });

  it('Select search by author should have at least an option with value equals to null :', () => {
    expect(fixture.nativeElement.querySelector('#searchByAuthor option#defaultOption[value="undefined"]').innerHtml).not.toBeNull();
  });

  it('Select search by author should have at least an option with content text equals to : Tous les auteurs', () => {
    expect(fixture.nativeElement.querySelector('#searchByAuthor option#defaultOption[value="undefined"]').innerText).toBe('Tous les auteurs');
  });

  /*it('Should throw an event authorEvent when an author is selected', () => {
    spyOn(component.authorEvent, 'emit');
    fixture.detectChanges();
    // Je ne peux pas tester, il me faut pour ça une option sélectionnable d'entrée de jeu.
    /*const select = fixture.nativeElement.querySelector('#searchByAuthor');
    select.innerHtml += '<option value="10">Toto</option>';
    select.value = "100";
    select.dispatchEvent(new Event('change'));
    console.log(select);
    fixture.detectChanges();
    expect(component.authorEvent.emit).toHaveBeenCalled();
  });*/
});
