import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R159Component } from './r159.component';

describe('R159Component', () => {
  let component: R159Component;
  let fixture: ComponentFixture<R159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
