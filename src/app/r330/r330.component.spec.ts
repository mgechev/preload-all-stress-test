import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R330Component } from './r330.component';

describe('R330Component', () => {
  let component: R330Component;
  let fixture: ComponentFixture<R330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
