import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: 'signup',
  component:SignupComponent
},{
  path: 'home',
  component:HomeComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
