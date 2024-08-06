import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './ui/table/table.component';
import { ModalComponent } from './ui/modal/modal.component';
import { SwitcherComponent } from './ui/switcher/switcher.component';
import { UiTableComponent } from './ui/ui-table/ui-table.component';
import { UiModalComponent } from './ui/ui-modal/ui-modal.component';
import { BounceOnHoverDirective } from './directives/bounce-on-hover.directive';
import { FadeOnHoverDirective } from './directives/fade-on-hover.directive';

import { SessionService } from './services/session.service';
import { LoginService } from './services/auth.service';
import { AnimeService } from './services/anime.services';
import { UserComponent } from './pages/user/user.component';
import { UiPaginationComponent } from './ui/ui-pagination/ui-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent,
    SwitcherComponent,
    UiTableComponent,
    UiModalComponent,
    BounceOnHoverDirective,
    FadeOnHoverDirective,
    UserComponent,
    UiPaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
      timeOut: 6000,
      enableHtml: true, // Allows HTML content in the toast
    }),
    AppRoutingModule
  ],
  providers: [
    SessionService,
    LoginService,
    AnimeService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
