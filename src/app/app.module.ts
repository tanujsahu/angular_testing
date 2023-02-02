import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethmaticalComponent } from './methmatical/methmatical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModules } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    MethmaticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
