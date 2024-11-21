import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponent } from './di.component';
import { ThemeService } from '../../services/theme.service';

class MockThemeService {
  getCurrentTheme() {
    return 'orange';
  }
}

describe('DiComponent', () => {
  let component: DiComponent;
  let fixture: ComponentFixture<DiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiComponent],
      providers: [
        {
          provide: ThemeService,
          useClass: MockThemeService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
