import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R270Component } from './r270.component';

describe('R270Component', () => {
  let component: R270Component;
  let fixture: ComponentFixture<R270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
