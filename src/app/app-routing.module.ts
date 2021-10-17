import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './pages/welcome-screen/welcome-screen.component';
import { OnboardingOneComponent } from './pages/onboarding-one/onboarding-one.component';

const routes: Routes = [
  {path:'welcome', component: WelcomeScreenComponent},
  {path:'onboarding-one', component: OnboardingOneComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
