import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R106Component } from './r106.component';

const routes: Routes = [{ path: '', component: R106Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R106RoutingModule { }
