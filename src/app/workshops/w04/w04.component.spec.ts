import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W04Component } from './w04.component';

describe('W04Component', () => {
  let component: W04Component;
  let fixture: ComponentFixture<W04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [W04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
