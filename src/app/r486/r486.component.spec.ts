import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R486Component } from './r486.component';

describe('R486Component', () => {
  let component: R486Component;
  let fixture: ComponentFixture<R486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R486Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
