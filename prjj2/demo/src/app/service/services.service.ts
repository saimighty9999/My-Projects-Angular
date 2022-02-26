import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  auth(){
    let Valid=localStorage.getItem('userverified');
    if(Valid!==null){
    let isValid=JSON.parse(Valid)
      return isValid
    }

  }
}