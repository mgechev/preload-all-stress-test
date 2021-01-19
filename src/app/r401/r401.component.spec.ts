import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R401Component } from './r401.component';

describe('R401Component', () => {
  let component: R401Component;
  let fixture: ComponentFixture<R401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
