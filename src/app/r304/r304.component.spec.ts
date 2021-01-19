import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R304Component } from './r304.component';

describe('R304Component', () => {
  let component: R304Component;
  let fixture: ComponentFixture<R304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R304Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
