import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R226Component } from './r226.component';

describe('R226Component', () => {
  let component: R226Component;
  let fixture: ComponentFixture<R226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
