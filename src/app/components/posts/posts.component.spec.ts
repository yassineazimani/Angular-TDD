import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../../services/postService';
import { AuthorService } from '../../../services/authorService';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [ HttpClientModule ],
      providers: [ PostService, AuthorService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generateRandomColor should return value belongs to blue, yellow, red, green', () => {
    const values = ['blue','yellow','red','green'];
    let i = 0;
    for(; i < 5000; ++i){
      expect(values.includes(component.generateRandomColor())).toBeTruthy();
    }
  });

});
