import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R471Component } from './r471.component';

const routes: Routes = [{ path: '', component: R471Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R471RoutingModule { }
