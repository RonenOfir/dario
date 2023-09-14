import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  myFormGroup: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.myFormGroup = this.formBuilder.group({
      fname: '',
      lname: '',
      email: '',
      password: '', 
    });
  }

  submitForm(): void{


  }

}
