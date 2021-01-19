import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R50Component } from './r50.component';

describe('R50Component', () => {
  let component: R50Component;
  let fixture: ComponentFixture<R50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
