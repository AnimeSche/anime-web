// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {faDungeon} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  logInIcon = faDungeon;
  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private toastr: ToastrService,
              private router: Router,
              private route: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    // @ts-ignore
    let pass = group.controls.password.value;
    // @ts-ignore
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    this.register()
  }

  register(){
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;

    const data = new FormData()

    data.append('username', username);
    data.append('password', password);

    this.loginService.register(data).pipe().subscribe((response:any)=>{
      this.toastr.success('User registration successfully, login to continue.');
      setTimeout(()=>{
        this.router.navigateByUrl('/home')
      }, 200)

    }, (error)=>{
      this.toastr.error(error.error.reason, 'User registration failed')
    })
  }
}
