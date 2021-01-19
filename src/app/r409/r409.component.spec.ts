import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R409Component } from './r409.component';

describe('R409Component', () => {
  let component: R409Component;
  let fixture: ComponentFixture<R409Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R409Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
