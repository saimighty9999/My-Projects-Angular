import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm=new FormGroup({
   email:new FormControl("",[Validators.required]),
   password: new FormControl("",[Validators.required])
 })
 get email(){
   return this.loginForm.get("email")
 }
 get password(){
   return this.loginForm.get("password")
 }
 validate(){
   console.log(this.loginForm.value);
   
 }
  constructor() { }

  ngOnInit(): void {
  }

}
