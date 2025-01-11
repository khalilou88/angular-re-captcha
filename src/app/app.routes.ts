import { Routes } from '@angular/router';
import { ReCaptchaV2PageComponent } from './re-captcha-v2-page/re-captcha-v2-page.component';
import { ReCaptchaV3PageComponent } from './re-captcha-v3-page/re-captcha-v3-page.component';

export const routes: Routes = [
  { path: 're-captcha-v2', component: ReCaptchaV2PageComponent },
  { path: 're-captcha-v3', component: ReCaptchaV3PageComponent },
  { path: '', redirectTo: '/re-captcha-v2', pathMatch: 'full' },
];
