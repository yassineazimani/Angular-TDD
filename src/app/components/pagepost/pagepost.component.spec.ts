import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepostComponent } from './pagepost.component';

describe('PagepostComponent', () => {
  let component: PagepostComponent;
  let fixture: ComponentFixture<PagepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
