import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import { UsuriosService } from "../servicios/usurios.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userRole:string=""
  constructor(private  jwt :JwtHelperService, private router : Router, private userService : UsuriosService){
  }
  canActivate (
     
    ): Observable<boolean> | Promise <boolean  | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{   
        
      this.userRole =this.jwt.decodeToken(localStorage.getItem("token")!).sub.roles
        if(this.userRole === "admin"){          
            return true
        }else{
            this.router.navigate(['/login'])
            return false;
        }
    }
    
}
