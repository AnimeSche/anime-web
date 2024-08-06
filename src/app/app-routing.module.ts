import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";
import { UserComponent } from './pages/user/user.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent, title: 'Home', children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
      },
      {
        path: 'profile',
        component: UserComponent,
        title: 'User Profile'
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Calendar Anime'
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
      }
    ]
  },
  { path: 'anime-list', component: AnimeListComponent, title: 'Anime List' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
