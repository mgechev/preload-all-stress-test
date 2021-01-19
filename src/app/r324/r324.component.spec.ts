import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R324Component } from './r324.component';

describe('R324Component', () => {
  let component: R324Component;
  let fixture: ComponentFixture<R324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R324Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
