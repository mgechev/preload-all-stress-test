import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R244Component } from './r244.component';

describe('R244Component', () => {
  let component: R244Component;
  let fixture: ComponentFixture<R244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
