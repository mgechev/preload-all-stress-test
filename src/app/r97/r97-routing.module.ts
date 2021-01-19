import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R97Component } from './r97.component';

const routes: Routes = [{ path: '', component: R97Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R97RoutingModule { }
