import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethmaticalComponent } from './methmatical/methmatical.component';

const routes: Routes = [
  { path: 'mathmatical', component: MethmaticalComponent },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
