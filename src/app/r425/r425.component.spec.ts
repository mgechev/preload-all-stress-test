import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R425Component } from './r425.component';

describe('R425Component', () => {
  let component: R425Component;
  let fixture: ComponentFixture<R425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R425Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
