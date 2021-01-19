import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R206Component } from './r206.component';

const routes: Routes = [{ path: '', component: R206Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R206RoutingModule { }
