import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R289Component } from './r289.component';

const routes: Routes = [{ path: '', component: R289Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R289RoutingModule { }
