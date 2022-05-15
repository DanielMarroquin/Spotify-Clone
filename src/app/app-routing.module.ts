import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';
import { HeaderUserComponent } from './shared/components/header-user/header-user.component';

const routes: Routes = [
  {
    path: 'auth', // TODO: Localhost:4200/
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
    // loadChildren apunta a la ruta del modulo/componente que se desee
    // Se usa loadChildren para el concepto de carga perezosa 
  },
  {
    path: '',
    component: HomePagesComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
