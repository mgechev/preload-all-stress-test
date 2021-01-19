import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R194Component } from './r194.component';

describe('R194Component', () => {
  let component: R194Component;
  let fixture: ComponentFixture<R194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
