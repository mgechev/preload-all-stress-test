import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R332Component } from './r332.component';

const routes: Routes = [{ path: '', component: R332Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R332RoutingModule { }
