import { Component } from '@angular/core';
import { EmailValidator , FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  myFormValidation = new FormGroup({
    name:new FormControl("mohamed",Validators.minLength(3)),
    age:new FormControl(32,[Validators.min(20),Validators.max(40)]),
    email:new FormControl("mohamed@gmail.com" , Validators.email),

  });

  check(){
    if(this.myFormValidation.valid === false){
      alert("INVALID Input Try Again");
    }else{
      alert(this.myFormValidation.status);
    }

  }

  get NameValid(){
    return this.myFormValidation.controls["name"].valid;
  }

  get AgeValid(){
    return this.myFormValidation.controls["age"].valid;
  }

  get EmailValid(){
    return this.myFormValidation.controls["email"].valid;
  }
}