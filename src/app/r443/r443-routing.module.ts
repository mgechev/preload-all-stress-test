import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R443Component } from './r443.component';

const routes: Routes = [{ path: '', component: R443Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R443RoutingModule { }
