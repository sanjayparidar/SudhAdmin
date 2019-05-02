import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private auth:AuthService,private myRoute:Router){}
    canActivate(
      next: ActivatedRouteSnapshot,state: RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn()){
        return true;
      }else{
        this.myRoute.navigate([""]);
        return false;
      }
    }
}