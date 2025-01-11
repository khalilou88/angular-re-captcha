import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaV3PageComponent } from './re-captcha-v3-page.component';

describe('ReCaptchaV3PageComponent', () => {
  let component: ReCaptchaV3PageComponent;
  let fixture: ComponentFixture<ReCaptchaV3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReCaptchaV3PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReCaptchaV3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
