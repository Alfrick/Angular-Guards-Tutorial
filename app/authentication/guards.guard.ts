/* guards.guard.ts */ 
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanActivateChild {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    /* redirect the navigation and return false */
    if(!this.auth.isAdmin){
      this.router.navigate(['404'])
    }
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      /* redirect the navigation and return false */
      if(!this.auth.isLoggedIn){
        this.router.navigate(['404'])
      }
    return true;
  }
  
}
