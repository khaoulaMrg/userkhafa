import { Injectable } from '@angular/core';

const TOKEN = 'token'
const USER ='user'


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static getToken() {
    throw new Error('Method not implemented.');
  }

  constructor() { 


  }

  static saveToken(token: string ):void{
   window.localStorage.removeItem(TOKEN);
   window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user:any): void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
  

  
   
  static signout(){
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }

}