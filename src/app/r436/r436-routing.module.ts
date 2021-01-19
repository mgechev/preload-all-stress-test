import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R436Component } from './r436.component';

const routes: Routes = [{ path: '', component: R436Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R436RoutingModule { }
