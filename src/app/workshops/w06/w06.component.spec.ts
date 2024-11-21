import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W06Component } from './w06.component';

describe('W06Component', () => {
  let component: W06Component;
  let fixture: ComponentFixture<W06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W06Component],
    }).compileComponents();

    fixture = TestBed.createComponent(W06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
