import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R314Component } from './r314.component';

describe('R314Component', () => {
  let component: R314Component;
  let fixture: ComponentFixture<R314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
