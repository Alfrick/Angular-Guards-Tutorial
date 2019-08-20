/* authentication.service.ts */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  get isAdmin(){
     /* using the get keyword allows us to access the function as a property */   

      return true;
  }

  get isLoggedIn(){

     return true;
  }
}
