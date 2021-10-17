import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { OnboardingOneComponent } from './pages/onboarding-one/onboarding-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WelcomeScreenComponent,
    OnboardingOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
