// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../../services/auth.service";
import { SessionService } from "../../services/session.service";
import { ToastrService } from "ngx-toastr";
import { faDoorClosed, faDoorOpen, faKey, faDungeon } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";
import { settings } from "../../../environments/environments";
import { catchError, of } from 'rxjs';

export interface User {
  nickname: string;
  uuid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  enterIcon = faKey;

  loginIcon = faDungeon;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private sessionService: SessionService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  onSubmit() {
    // Тут можна додати логіку обробки форми
    this.login()
  }

  login() {
    const { username, password } = this.loginForm.value;
    const data = new FormData();
    // @ts-ignore
    data.append('username', username);
    //@ts-ignore
    data.append('password', password);

    this.loginService.logIn(data).pipe(
      catchError((err) => {
        this.toastr.error(err.error.message, 'Error');
        return of(null);
      })
    ).subscribe((response: any) => {
      if (response) {
        this.sessionService.setCurrentUser(response.user);
        this.sessionService.setToken(response.auth_token);
        settings.isLoggedIn = true;
        this.router.navigate(['']).finally(() => { });
      }
    });
  }
}
