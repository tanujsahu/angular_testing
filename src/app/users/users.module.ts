import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModules } from '../common/common.module';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CommonModules
  ]
})
export class UsersModule { }
