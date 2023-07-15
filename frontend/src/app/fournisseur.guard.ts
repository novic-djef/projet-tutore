import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FournisseurGuard implements CanActivate {
  constructor(private authservice:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if((this.authservice.isAdmin())||(this.authservice.isTechnicien()))
  //     return true;
  //     else
  //     {
  // this.router.navigate(['forbidden']);
  // return false;
  //     }   
  return true
     }
  
}
