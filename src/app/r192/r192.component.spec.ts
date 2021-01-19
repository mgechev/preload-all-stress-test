import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R192Component } from './r192.component';

describe('R192Component', () => {
  let component: R192Component;
  let fixture: ComponentFixture<R192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
