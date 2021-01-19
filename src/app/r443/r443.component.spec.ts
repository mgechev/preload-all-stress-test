import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R443Component } from './r443.component';

describe('R443Component', () => {
  let component: R443Component;
  let fixture: ComponentFixture<R443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R443Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
