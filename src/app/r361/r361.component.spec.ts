import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R361Component } from './r361.component';

describe('R361Component', () => {
  let component: R361Component;
  let fixture: ComponentFixture<R361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
