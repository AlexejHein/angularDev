import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  name = new FormControl('',[ 
    Validators.required,
    Validators.minLength(4),]);
  email =  new FormControl('',[
    Validators.required,
    Validators.email,]);
  age =  new FormControl('',[
    Validators.required,
    Validators.min(18),
    Validators.max(120),]);
  password =  new FormControl('',[
    Validators.required,
    Validators.pattern(''),
  ]);
  confirm_Password =  new FormControl('',[
    Validators.required, ]);
  phoneNumber =  new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);

  ///^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  registerForm = new FormGroup({
   name:  this.name,
    email: this.email,
    age: this.age,
    passwird: this.password,
    confirm_Password: this.confirm_Password,
    phoneNumber: this.phoneNumber
  });

  register(){
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';
  };
}
