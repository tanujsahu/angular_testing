import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatMenuModule, MatButtonModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, modules
  ],
  exports: [modules]
})
export class CommonModules { }
