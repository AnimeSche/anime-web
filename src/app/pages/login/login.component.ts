// login.component.ts
import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginService} from "../../services/auth.service";
import {SessionService} from "../../services/session.service";
import {ToastrService} from "ngx-toastr";
import {faDoorClosed, faDoorOpen, faKey, faDungeon} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {settings} from "../../../environments/environments";

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
    username: [null, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });

  enterIcon =faKey;

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
    if (this.loginForm.valid) {
     this.login()
    }
  }

  login(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    const data = new FormData();

    // @ts-ignore
    data.append('username', username);
    // @ts-ignore
    data.append('password', password);

    this.loginService.logIn(data).pipe().subscribe((response:any) => {
      this.sessionService.setCurrentUser(response.data.user);
      this.sessionService.setToken(response.data.auth_token);
      settings.isLoggedIn = true;
      setTimeout(()=>{
        this.router.navigateByUrl('/home');
      }, 200)
    }, (err) => {
      this.toastr.error(err.error.message, 'Error');
    })
  }
}
