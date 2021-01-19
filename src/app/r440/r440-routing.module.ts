import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R440Component } from './r440.component';

const routes: Routes = [{ path: '', component: R440Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R440RoutingModule { }
