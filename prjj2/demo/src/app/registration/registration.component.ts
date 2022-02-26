import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  regForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    pass1:new FormControl('',[Validators.required]),
    pass2:new FormControl('',[Validators.required])
  })
  get email(){
    return this.regForm.get('email')
  }
  get pass1(){
    return this.regForm.get('pass1')
  }
  get pass2(){
    return this.regForm.get('pass2')
  }
validate(){
  // console.log(this.regForm.value);
  localStorage.setItem('regEmail',this.regForm.value.email)
  localStorage.setItem('regPass',this.regForm.value.pass1)
  sessionStorage.setItem('regEmail',this.regForm.value.email)
  sessionStorage.setItem('regPass',this.regForm.value.pass1)
  if(this.regForm.value.pass1===this.regForm.value.pass2){
    this.router.navigate(['login'])
  }else{
    alert('password mismatch')
  }
}
}
