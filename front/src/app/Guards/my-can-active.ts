import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
    providedIn: 'root'
  })
export class MyCanActive implements CanActivate{

   
  
    constructor(private  jwt :JwtHelperService, private router : Router){
      
    }

    
  canActivate (
     
        ): Observable<boolean> | Promise <boolean  | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{ 
           
            let token =localStorage.getItem("token")
            if(token===null){
              console.log("token null")
              this.router.navigate(['/login'])
              return false
            }else{
           
              return true
            }
        }
        
}
