import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditView } from './post-edit.view';

describe('PostEditView', () => {
  let component: PostEditView;
  let fixture: ComponentFixture<PostEditView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEditView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
