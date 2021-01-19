import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R22Component } from './r22.component';

describe('R22Component', () => {
  let component: R22Component;
  let fixture: ComponentFixture<R22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
