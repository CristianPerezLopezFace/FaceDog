import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'src/app/servicios/message.service';
import { Amigo } from '../../clases/amigo';
import { Notificacion } from '../../clases/notificacion';
import { ComunicacionComponentsService } from '../../comunicacion-components.service';
import { UsuriosService } from '../../servicios/usurios.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent implements OnInit {
  
  sonAmigos:boolean=true
  amigos:Amigo[]=[]
  id_user = this.jwt.decodeToken(localStorage.getItem('token')!).sub.id;

  constructor(private message:MessageService,private comunicacion:ComunicacionComponentsService,private userService:UsuriosService,private router:Router,private jwt:JwtHelperService) { }

  ngOnInit(): void {
    this.getAmigos()
  }
  getAmigos(){
      this.sonAmigos=true
      let emailUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.email;
      this.amigos=[]
      this.userService.getAmigos(emailUser).subscribe(e =>{
        e.forEach(amigo => {
                
                this.amigos.push(amigo)
           })
           
      })
  }
  getAllUsers(){
    this.sonAmigos=false
    this.amigos=[]
    this.userService.getAllUsers().subscribe(e =>{
         e.forEach(amigo => {
             this.amigos.push(amigo)
         })
         
    })
  }
  solicitarAmistad(email:string){
   
    let nameUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.name;
    let emailUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.id_fotos;
    let tipoNoti="solicitud de amistad"
    let notificacion=new Notificacion(this.id_user,emailUser,nameUser,tipoNoti,email,new Date())
    this.userService.setNotificaion(notificacion).subscribe(e =>{

        this.message.createMessage("Solicitud enviada")
    })
  }
  verPerfil(emailAmigo:string){
       
       this.comunicacion.setemailAmigo(emailAmigo)
       this.router.navigate(['home/perfilamigo'])
     
  }
}
