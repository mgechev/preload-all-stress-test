import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R162Component } from './r162.component';

describe('R162Component', () => {
  let component: R162Component;
  let fixture: ComponentFixture<R162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
