import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  SC_RE_CAPTCHA_V2_LANGUAGE_CODE,
  SC_RE_CAPTCHA_V3_SITE_KEY,
} from '@semantic-components/re-captcha';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: SC_RE_CAPTCHA_V2_LANGUAGE_CODE, useValue: 'en' },
    {
      provide: SC_RE_CAPTCHA_V3_SITE_KEY,
      useValue: '6LczIrAqAAAAANk0sH07W5kW6hPNwfWAJbnaoEat',
    },
  ],
};
