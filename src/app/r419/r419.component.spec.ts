import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R419Component } from './r419.component';

describe('R419Component', () => {
  let component: R419Component;
  let fixture: ComponentFixture<R419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R419Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
