import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private router: Router, private jwt : JwtHelperService) {}

  isVerified : boolean = false;

  canActivate() {
    try {
      let token = this.jwt.decodeToken(localStorage.getItem('token')!);
      let id = token.sub.id;
      return true
    } catch (error) {
      this.router.navigate(['/']);
      return false
    }
  }
  canActivate2() {
    try {
      let token = this.jwt.decodeToken(localStorage.getItem('token')!);
      let id = token.sub.id;
      return true
    } catch (error) {
      this.router.navigate(['/']);
      return false
    }
  }
}
