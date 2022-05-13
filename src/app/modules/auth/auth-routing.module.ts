import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

const routes: Routes = [
  {
    path: 'login', //TODO http://localhost:4200/auth/login
    component: LoginPagesComponent
  },
  {
    path: '**', //Cuando una ruta no existe me direcciona siempre al login 
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
