import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R182Component } from './r182.component';

const routes: Routes = [{ path: '', component: R182Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R182RoutingModule { }
