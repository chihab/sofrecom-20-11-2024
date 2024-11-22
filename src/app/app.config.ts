import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { ThemeService } from './core/services/theme.service';
import { UserPreferenceService } from './core/services/user-preference.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes, withComponentInputBinding()),
    provideRouter(routes),
    provideHttpClient(),
    ThemeService,
    UserPreferenceService,
  ],
};
