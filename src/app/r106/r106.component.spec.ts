import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R106Component } from './r106.component';

describe('R106Component', () => {
  let component: R106Component;
  let fixture: ComponentFixture<R106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
