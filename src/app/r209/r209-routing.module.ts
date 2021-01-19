import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R209Component } from './r209.component';

const routes: Routes = [{ path: '', component: R209Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R209RoutingModule { }
