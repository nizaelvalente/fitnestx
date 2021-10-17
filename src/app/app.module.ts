import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { OnboardingOneComponent } from './pages/onboarding-one/onboarding-one.component';
import { OnboardingTwoComponent } from './pages/onboarding-two/onboarding-two.component';
import { OnboardingThreeComponent } from './pages/onboarding-three/onboarding-three.component';
import { OnboardingFourComponent } from './pages/onboarding-four/onboarding-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WelcomeScreenComponent,
    OnboardingOneComponent,
    OnboardingTwoComponent,
    OnboardingThreeComponent,
    OnboardingFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
