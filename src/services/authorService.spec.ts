import { HttpClient } from '@angular/common/http';
import { AuthorService } from './authorService';
import { of } from 'rxjs';
import { authors, authorsFromBackEnd } from './mocks/authorMock';

describe('Author service tests', () => {

  let authorService: AuthorService;

  let HttpClientFake: HttpClient;

  beforeEach(() => {
    HttpClientFake = { get: null } as HttpClient;
    authorService = new AuthorService(HttpClientFake);
  });

  it('findAll should return all authors', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(authorsFromBackEnd));
    const authors$ = authorService.findAll();
    expect(authors$).toBeDefined();
    expect(authors$).not.toBeNull();
    authors$.subscribe((authors) => {
      expect(authors.length).toBe(2);
      expect(authors[0].id).toBe(1);
      expect(authors[0].name).toBe('Leanne Graham');
      expect(authors[0].username).toBe('Bret');
      expect(authors[1].id).toBe(2);
      expect(authors[1].name).toBe('Ervin Howell');
      expect(authors[1].username).toBe('Antonette');
    });
  });

  it('findById should return Leanne Graham Author when id is equal to 1', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(authorsFromBackEnd));
    const author$ = authorService.findById(1);
    expect(author$).toBeDefined();
    expect(author$).not.toBeNull();
    author$.subscribe((author) => {
        expect(author.id).toBe(1);
        expect(author.name).toBe('Leanne Graham');
        expect(author.username).toBe('Bret');
    });
  });

  it('findById should return undefined value when id is equal to 4', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(authorsFromBackEnd));
    const author$ = authorService.findById(4);
    expect(author$).toBeDefined();
    author$.subscribe((author) => {
      expect(author).toBeDefined();
    });
  });

});
