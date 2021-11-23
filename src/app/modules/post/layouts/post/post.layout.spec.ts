import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLayout } from './post.layout';

describe('PostLayout', () => {
  let component: PostLayout;
  let fixture: ComponentFixture<PostLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
