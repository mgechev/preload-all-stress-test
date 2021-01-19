import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R134Component } from './r134.component';

const routes: Routes = [{ path: '', component: R134Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R134RoutingModule { }
