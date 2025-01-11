import { Component, inject } from '@angular/core';
import { ScReCaptchaV3 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-re-captcha-v3-page',
  imports: [],
  templateUrl: './re-captcha-v3-page.component.html',
  styleUrl: './re-captcha-v3-page.component.css',
})
export class ReCaptchaV3PageComponent {
  private readonly scReCaptchaV3 = inject(ScReCaptchaV3);

  async executeReCaptcha() {
    const token = await this.scReCaptchaV3.execute('submit');
    console.log('Token:', token);
  }
}
