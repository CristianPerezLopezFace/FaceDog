import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { Notificacion } from '../clases/notificacion';
import { MessageService } from './message.service';
import { UsuriosService } from './usurios.service';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  rol:string=""
  name:string=""

  
  notificaciones :Notificacion[] = []
  recargar = new Subject <boolean> ();

  recargarMenuNav() {

    this.recargar.next(false)
    this.recargar.next(true);
    
  }
  
  

  constructor(    private message: MessageService,
    private router:Router,
    private jwt:JwtHelperService,private userService:UsuriosService) { }
  getRol(){

    return this.rol
  }

  getName(){
    
    return this.name
  }
  setRol(){
    this.rol=this.jwt.decodeToken(localStorage.getItem("token") !).sub.roles;
    this.name=this.jwt.decodeToken(localStorage.getItem("token") !).sub.name;

  }
  
  getNotificaion(){
    
    let emailUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.email;
    console.log(emailUser)
    let contador=0;
    this.userService.getNotificacion(emailUser).subscribe(e => {
    let notificaciones:Notificacion[]=[]
      for (let index = 0; index < e.length; index++) {
           
            notificaciones.push(e[index])
       }
       setTimeout(() => this.getNotificaion(), 1000);
       return notificaciones
       
       
    })
  }
  tokenExpired(token:string){
    let ok=true;
    if(this.jwt.isTokenExpired(token)){
        localStorage.removeItem("token")
        
        this.message.createMessage("el token ha exiprado")
        this.router.navigate(['']);
    }else{
    }
    return ok
}

}
