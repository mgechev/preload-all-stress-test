import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R199Component } from './r199.component';

const routes: Routes = [{ path: '', component: R199Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R199RoutingModule { }
