import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { OnboardingOneComponent } from './pages/onboarding-one/onboarding-one.component';
import { OnboardingTwoComponent } from './pages/onboarding-two/onboarding-two.component';
import { OnboardingThreeComponent } from './pages/onboarding-three/onboarding-three.component';
import { OnboardingFourComponent } from './pages/onboarding-four/onboarding-four.component';
import { RegisterPageOneComponent } from './pages/register/register-page-one/register-page-one.component';
import { RegisterPageTwoComponent } from './pages/register/register-page-two/register-page-two.component';
import { RegisterPageThreeComponent } from './pages/register/register-page-three/register-page-three.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'onboarding/one', component: OnboardingOneComponent },
  { path: 'onboarding/two', component: OnboardingTwoComponent },
  { path: 'onboarding/three', component: OnboardingThreeComponent },
  { path: 'onboarding/four', component: OnboardingFourComponent },
  { path: 'register/one', component: RegisterPageOneComponent },
  { path: 'register/two', component: RegisterPageTwoComponent },
  {path: 'register/three', component: RegisterPageThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
