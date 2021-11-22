import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateView } from './post-create.view';

describe('PostCreateView', () => {
  let component: PostCreateView;
  let fixture: ComponentFixture<PostCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
