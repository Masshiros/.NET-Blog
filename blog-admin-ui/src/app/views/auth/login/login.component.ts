import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  AdminApiAuthApiClient,
  AuthenticatedResult,
  LoginRequest,
} from 'src/app/api/admin-api.service.generated';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authApiCLient: AdminApiAuthApiClient,
    private alertServices: AlertService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login() {
    var request: LoginRequest = new LoginRequest({
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value,
    });
    this.authApiCLient.login(request).subscribe({
      next: (res: AuthenticatedResult) => {
        // save token and RT to localstorage

        // redirect to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        console.log(error);
        this.alertServices.showError('Login invalid');
      },
    });
  }
}
