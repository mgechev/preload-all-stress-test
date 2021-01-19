import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R240Component } from './r240.component';

describe('R240Component', () => {
  let component: R240Component;
  let fixture: ComponentFixture<R240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
