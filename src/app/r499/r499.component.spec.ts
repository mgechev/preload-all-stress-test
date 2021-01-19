import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R499Component } from './r499.component';

describe('R499Component', () => {
  let component: R499Component;
  let fixture: ComponentFixture<R499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R499Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
