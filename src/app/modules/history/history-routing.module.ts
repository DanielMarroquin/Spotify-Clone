import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPagesComponent } from "@modules/history/pages/history-pages/history-pages.component";

const routes: Routes = [
  {
    path: '',
    component: HistoryPagesComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
