import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  userForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      firstName: ['Tanuj'],
      lastName: ['Sahu'],
      address: this._fb.group({
        street: ['Malviya Nagar'],
        city: ['Jaipur'],
        state: ['Rajasthan'],
        pincode: ['302001']
      }),
    });
  }

}
