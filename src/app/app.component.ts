import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_testing';
  constructor(private _router: Router) {

  }
  mathmatical() {
   return this._router.navigateByUrl('/mathmatical')
  }

  user(){
    this._router.navigateByUrl('/user/user')
  }
}
