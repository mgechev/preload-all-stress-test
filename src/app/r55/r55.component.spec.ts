import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R55Component } from './r55.component';

describe('R55Component', () => {
  let component: R55Component;
  let fixture: ComponentFixture<R55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
