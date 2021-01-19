import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R78Component } from './r78.component';

const routes: Routes = [{ path: '', component: R78Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R78RoutingModule { }
