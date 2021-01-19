import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R353Component } from './r353.component';

const routes: Routes = [{ path: '', component: R353Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R353RoutingModule { }
