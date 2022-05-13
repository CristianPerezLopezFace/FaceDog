import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Amigo } from 'src/app/clases/amigo';
import { Comentario } from 'src/app/clases/comentario';
import { Foto } from 'src/app/clases/foto';
import { UsuriosService } from '../../servicios/usurios.service';
import { formatDate } from '@angular/common';
import { Notificacion } from 'src/app/clases/notificacion';

@Component({
  selector: 'app-vista-veterinario',
  templateUrl: './vista-veterinario.component.html',
  styleUrls: ['./vista-veterinario.component.scss']
})
export class VistaVeterinarioComponent implements OnInit {

  comentarios:Comentario[]=[]
 
  misNoticias:Foto[]=[]

  datosImgAmpliar=""
  ampliar:boolean =false
  idFotoAmpliada = 0
  constructor(private userService:UsuriosService,private jwt:JwtHelperService) { }

  ngOnInit(): void {
    this.getNoticias()
  }

  
  getNoticias(){
    let email=this.jwt.decodeToken(localStorage.getItem("token")!).sub.email
   
          this.userService.getAllImgVeter().subscribe(fotos =>{            
              fotos.forEach( e => {
                   this.misNoticias.push(e)
              })
         })
   
      

  }




}
