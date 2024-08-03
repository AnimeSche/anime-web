import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import {SessionService} from "./services/session.service";
import {LoginService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './ui/table/table.component';
import { ModalComponent } from './ui/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { SwitcherComponent } from './ui/switcher/switcher.component';
import {AnimeService} from "./services/anime.services";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent, TableComponent, ModalComponent, SwitcherComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ToastrModule.forRoot({positionClass: 'toast-bottom-right', closeButton: false, timeOut: 6000}),
      FormsModule
    ],
  providers: [
    SessionService,
    LoginService,
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
