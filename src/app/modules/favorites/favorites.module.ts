import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FavoritesPagesComponent } from './pages/favorites-pages/favorites-pages.component';



@NgModule({
  declarations: [
    FavoritesPagesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
