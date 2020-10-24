import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title Test when argument component title is Test', () => {
    component.title = 'Test';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').innerText).toBe('Test');
  });

  it('should display content ut aspernatur corporis harum nihil quis provident when argument component content is ut aspernatur corporis harum nihil quis provident', () => {
     component.content = 'ut aspernatur corporis harum nihil quis provident';
     fixture.detectChanges();
     expect(fixture.nativeElement.querySelector('p').innerText).toBe('ut aspernatur corporis harum nihil quis provident');
  });

  it('should display By Harry Potter when argument component author is Harry Potter', () => {
     component.author = 'Harry Potter';
     fixture.detectChanges();
     expect(fixture.nativeElement.querySelector('.author').innerText).toBe('Harry Potter');
  });

  it('should use class red when argument component color is red', () => {
    component.color = 'red';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.post').className.includes('content-red')).toBeTruthy();
  });

  it('should use class green when argument component color is green', () => {
    component.color = 'green';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.post').className.includes('content-green')).toBeTruthy();
  });

  it('shouldn\'t use content-{color} when argument component color is undefined', () => {
    expect(fixture.nativeElement.querySelector('.post').className).toBe('post');
  });

});
