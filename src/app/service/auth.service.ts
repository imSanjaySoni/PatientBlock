import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;  
  islogged :boolean=false;
  constructor() { }
  logIn(){
    return this.islogged;
  }
  register(user){
    this.user = user;
    
  }
}
