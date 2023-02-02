import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethmaticalComponent } from './methmatical/methmatical.component';

const routes: Routes = [{ path: 'mathmatical', component: MethmaticalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
