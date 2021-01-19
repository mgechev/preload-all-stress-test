import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R159Component } from './r159.component';

const routes: Routes = [{ path: '', component: R159Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R159RoutingModule { }
