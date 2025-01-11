import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaV2PageComponent } from './re-captcha-v2-page.component';

describe('ReCaptchaV2PageComponent', () => {
  let component: ReCaptchaV2PageComponent;
  let fixture: ComponentFixture<ReCaptchaV2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReCaptchaV2PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReCaptchaV2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
