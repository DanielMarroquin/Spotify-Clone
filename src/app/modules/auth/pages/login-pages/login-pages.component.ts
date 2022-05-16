import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "@modules/auth/services/auth.service";

@Component({
  selector: 'app-auth-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  // NOTA: EN LA CLASE DE LOS COMPONENTES SE PUEDE REALIZAR LA INYECCCION DE DATOS
  // DESDE CUALQUIER CLASE, EN ESTE CASO LA CLASE DECLARADA EN EL SERVICE ASIGNANDOLE UN SEUDONIMO

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password);
  }

}
