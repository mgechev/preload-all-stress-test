import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R140Component } from './r140.component';

describe('R140Component', () => {
  let component: R140Component;
  let fixture: ComponentFixture<R140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
