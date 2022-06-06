import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {
  username!:string
  password!:string

  getUsername():string
  {
    return this.username;
  }
  getPassword()
  {
    return this.password;
  }
   setUsername(user:string)
   {
     this.username=user;
   }
   setPassword(pass:string)
   {
     this.password=pass;
   }

   isLoggedIn():boolean{
    if(this.username=='admin@gmail.com' && this.password=='Admin@2000'){

      return true;}
    else{

      return false;}
  }

}
