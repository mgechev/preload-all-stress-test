import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R262Component } from './r262.component';

const routes: Routes = [{ path: '', component: R262Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R262RoutingModule { }
