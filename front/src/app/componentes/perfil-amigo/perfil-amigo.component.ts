import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Amigo } from 'src/app/clases/amigo';
import { Usuario } from 'src/app/clases/usuario';
import { Foto } from '../../clases/foto';
import { ComunicacionComponentsService } from '../../comunicacion-components.service';
import { UsuriosService } from '../../servicios/usurios.service';

@Component({
  selector: 'app-perfil-amigo',
  templateUrl: './perfil-amigo.component.html',
  styleUrls: ['./perfil-amigo.component.scss']
})
export class PerfilAmigoComponent implements OnInit{
  
  emailAmigo:string=""
  allImg:Foto[]=[]

  amigo! : Usuario;
  constructor(private comunicacion:ComunicacionComponentsService,private userService:UsuriosService) { }


  async ngOnInit() {
    this.emailAmigo= this.comunicacion.getemailAmigo()
    this.getAllImageUser()
    this.getAmigo()
  }
  
  getAllImageUser(){
    this.userService.getAllImg(this.emailAmigo).subscribe((data) =>{
            data.forEach(e => this.allImg.push(e))          
    })
  }
  getAmigo(){
    this.userService.get_one_user(this.emailAmigo).subscribe(amigo => {
        this.amigo = amigo
    })
  }
  
}
