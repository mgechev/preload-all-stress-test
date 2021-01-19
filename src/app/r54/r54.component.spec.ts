import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R54Component } from './r54.component';

describe('R54Component', () => {
  let component: R54Component;
  let fixture: ComponentFixture<R54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
