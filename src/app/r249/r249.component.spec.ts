import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R249Component } from './r249.component';

describe('R249Component', () => {
  let component: R249Component;
  let fixture: ComponentFixture<R249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
