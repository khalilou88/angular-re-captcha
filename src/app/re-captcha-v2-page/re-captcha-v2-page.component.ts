import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ScReCaptchaV2 } from '@semantic-components/re-captcha';

@Component({
  selector: 'app-re-captcha-v2-page',
  imports: [ReactiveFormsModule, ScReCaptchaV2, JsonPipe],
  templateUrl: './re-captcha-v2-page.component.html',
  styleUrl: './re-captcha-v2-page.component.css',
})
export class ReCaptchaV2PageComponent {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  doSomething(event: any) {
    console.log('valueChange');
    console.log(event);
  }
}
