import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardGuard implements CanActivate, CanActivateChild{

  constructor(private router: Router, private authservice: AuthguardService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authservice.isUserLoggedIn()) {
        alert('Sorry you are not allowed to view this page. Please login');
        this.router.navigate(['login'], {queryParams: {retUrl: route.url}});
        return false;
      }
    return true; 
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authservice.isAdminUuser()){
        alert('Only Admins can view this page');
        return false;
      }
      return true;
    }
  
}
