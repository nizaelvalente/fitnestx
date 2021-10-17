import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { OnboardingOneComponent } from './pages/onboarding-one/onboarding-one.component';
import { OnboardingTwoComponent } from './pages/onboarding-two/onboarding-two.component';
import { OnboardingThreeComponent } from './pages/onboarding-three/onboarding-three.component';
import { OnboardingFourComponent } from './pages/onboarding-four/onboarding-four.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'onboarding/one', component: OnboardingOneComponent },
  { path: 'onboarding/two', component: OnboardingTwoComponent },
  { path: 'onboarding/three', component: OnboardingThreeComponent },
  { path: 'onboarding/four', component: OnboardingFourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
