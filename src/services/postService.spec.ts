import { HttpClient } from '@angular/common/http';
import { PostService } from './postService';
import { of } from 'rxjs';
import { posts, postsFromBackEnd } from './mocks/postMock';

describe('Post service tests', () => {

  let postService: PostService;

  let HttpClientFake: HttpClient;

  beforeEach(() => {
    HttpClientFake = { get: null } as HttpClient;
    postService = new PostService(HttpClientFake);
  });

  it('findAll should return all posts (2 posts) when no argument given', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(postsFromBackEnd));
    const posts$ = postService.findAll();
    expect(posts$).toBeDefined();
    expect(posts$).not.toBeNull();
    posts$.subscribe((posts) => {
      expect(posts.length).toBe(2);
      expect(posts[0].id).toBe(1);
      expect(posts[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(posts[0].body).toBe('quia et suscipit suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto');
      expect(posts[0].userId).toBe(1);

      expect(posts[1].id).toBe(2);
      expect(posts[1].title).toBe('qui est esse');
      expect(posts[1].body).toBe('est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla');
      expect(posts[1].userId).toBe(1);
    });
  });

  it('findAll should return post with title facere when argument given is facere', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(postsFromBackEnd));
    const posts$ = postService.findAll('facere');
    expect(posts$).toBeDefined();
    expect(posts$).not.toBeNull();
    posts$.subscribe((posts) => {
      expect(posts.length).toBe(1);
      expect(posts[0].id).toBe(1);
      expect(posts[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(posts[0].body).toBe('quia et suscipit suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto');
      expect(posts[0].userId).toBe(1);
    });
  });

  it('findAll should return post with body tempore when argument given is tempore', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(postsFromBackEnd));
    const posts$ = postService.findAll('tempore');
    expect(posts$).toBeDefined();
    expect(posts$).not.toBeNull();
    posts$.subscribe((posts) => {
      expect(posts.length).toBe(1);
      expect(posts[0].id).toBe(2);
      expect(posts[0].title).toBe('qui est esse');
      expect(posts[0].body).toBe('est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla');
      expect(posts[0].userId).toBe(1);
    });
  });

  it('findById should return post n°1 when argument given is 1', () => {
    spyOn(HttpClientFake, 'get').and.returnValue(of(postsFromBackEnd));
    const post$ = postService.findById(1);
    expect(post$).toBeDefined();
    expect(post$).not.toBeNull();
    post$.subscribe((post) => {
    expect(post).toBeDefined();
      expect(post).not.toBeNull();
      expect(post.id).toBe(1);
      expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      expect(post.body).toBe('quia et suscipit suscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto');
      expect(post.userId).toBe(1);
    });
  });

});
