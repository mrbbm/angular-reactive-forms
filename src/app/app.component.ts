import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public userForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.userForm = this._fb.group({
      firstName: [],
      lastName: [],
      address: this._fb.array([this.addAddressGroup()])
    });
  }

  private addAddressGroup(): FormGroup {
    return this._fb.group({
      street: [],
      city: [],
      state: [],
      contacts: []
    });
  }

  addAddress(): void {

    this.addressArray.push(this.addAddressGroup());

    console.log(this.addressArray);
  }

  removeAddress(index: number): void {
    this.addressArray.removeAt(index);
  }

  get addressArray(): FormArray {
    return <FormArray>this.userForm.get('address');
  }

  addContact(): void {
    alert("Need to Implement");
  }
}
