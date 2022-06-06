import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AuthguardServiceService } from './authguard-service.service';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationGuard implements CanActivate {
  constructor(private auth:AuthguardServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('auth tested')
      // return true;
      if(this.auth.isLoggedIn()){
        alert('Logged in')
        return true;
      }
      else{
        alert('Access denied, Do register')
        return false;
      }
    
  }

}
