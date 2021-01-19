import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R499Component } from './r499.component';

const routes: Routes = [{ path: '', component: R499Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R499RoutingModule { }
