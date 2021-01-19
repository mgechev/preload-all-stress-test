import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R79Component } from './r79.component';

describe('R79Component', () => {
  let component: R79Component;
  let fixture: ComponentFixture<R79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
