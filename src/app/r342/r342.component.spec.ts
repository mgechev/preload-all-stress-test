import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R342Component } from './r342.component';

describe('R342Component', () => {
  let component: R342Component;
  let fixture: ComponentFixture<R342Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R342Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
