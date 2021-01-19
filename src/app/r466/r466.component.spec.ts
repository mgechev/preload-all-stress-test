import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R466Component } from './r466.component';

describe('R466Component', () => {
  let component: R466Component;
  let fixture: ComponentFixture<R466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R466Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
