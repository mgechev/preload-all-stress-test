import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R80Component } from './r80.component';

const routes: Routes = [{ path: '', component: R80Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R80RoutingModule { }
