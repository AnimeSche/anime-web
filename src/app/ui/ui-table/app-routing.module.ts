import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../../pages/login/login.component";
import { RegisterComponent } from "../../pages/register/register.component";
import { HomeComponent } from "../../pages/home/home.component";
import { UserComponent } from '../../pages/user/user.component';

export const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  title: 'Login',
}, {
  path: 'profile',
  component: UserComponent,
  title: 'User Profile'
},
{
  path: 'register',
  component: RegisterComponent,
  title: 'Register'
}, {
  path: 'home',
  component: HomeComponent,
  title: 'Home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
