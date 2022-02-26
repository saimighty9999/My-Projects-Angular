// import { variable } from '@angular/compiler/src/output/output_ast';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-checkbox',
//   templateUrl: './checkbox.component.html',
//   styleUrls: ['./checkbox.component.css']
// })
// export class CheckboxComponent implements OnInit {

//   composeForm=new FormGroup({
//     email1:new FormControl("",[Validators.required,Validators.email]),
//     rec:new FormControl("",[Validators.required,Validators.email]),
//     text:new FormControl("",[Validators.required])
//   })
//   get email1(){
//     return this.composeForm.get("email1")
//   }
//   get rec(){
//     return this.composeForm.get("rec")
//   }
//   get text(){
//     return this.composeForm.get("text")
//   }
//   Submit(){
//     console.log(this.composeForm.value.email1);

//   }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  received:any
  msg: any
  myMessage: any;
  sent() {
    window.alert("message has been sent")
    // document.getElementById('reci').innerText=this.sendForm.value
  }

  sendForm = new FormGroup({
    from: new FormControl("", [Validators.required]),
    re: new FormControl("", [Validators.required]),
    text: new FormControl("", [Validators.required])

  })
  get from() {
    return this.sendForm.get("from")
  }
  get re() {
    return this.sendForm.get("re")
  }
  get text() {
    return this.sendForm.get("text")
  }
  onSend() {
    return this.sendForm.value
    console.log(this.sendForm.value);

  }
  recived() {
    console.log(this.sendForm.value);
    // @ViewChild("sai")?.innerHTML=`from:${this.sendForm.value.from}<br>${this.sendForm.value.text}`

    // document.getElementById('recived').innerHTML=`from:${this.sendForm.value.from}<br>${this.sendForm.value.text}`

  }
  submit() {

  }
  ngOnInit(): void {

  }

}
