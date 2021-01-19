import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R310Component } from './r310.component';

describe('R310Component', () => {
  let component: R310Component;
  let fixture: ComponentFixture<R310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
