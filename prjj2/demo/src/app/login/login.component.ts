import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }


  ngOnInit(): void {
    localStorage.setItem("userverified",JSON.stringify(false))
  }
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass:new FormControl('',[Validators.required])
  })
  get email(){
    return this.loginForm.get('email')
  }
  get pass(){
    return this.loginForm.get('pass')
  }

validate(){
  // let rEmail=localStorage.getItem('regEmail')
  // let rPassword=localStorage.getItem('regPass')
  // if(rEmail===this.loginForm.value.email && rPassword===this.loginForm.value.pass){
  //   alert('login Success')
  // }else{
  //   alert('credientials Mismatch')
  // }
  let reEmail=sessionStorage.getItem('regEmail')
  let rePassword=sessionStorage.getItem('regPass')
  if(reEmail===this.loginForm.value.email && rePassword===this.loginForm.value.pass){
    localStorage.setItem("userverified",JSON.stringify(true))
    alert('login Success') 
    this.route.navigate(['checkbox'])
  }else{
    alert('credientials Mismatch')
  }
  
}
}
