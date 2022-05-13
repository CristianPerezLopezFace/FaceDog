import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { DocumentServiceService } from 'src/app/servicios/documentService.service';
import { MessageService } from 'src/app/servicios/message.service';

import { Foto } from '../../clases/foto';
import { UsuriosService } from '../../servicios/usurios.service';

import { Amigo } from 'src/app/clases/amigo';
import { UserRegisterService } from 'src/app/servicios/user-register.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss'],
})
export class ParquesComponent implements OnInit {
  allImg: Foto[] = [];
  foto!: Foto;

  idFotoSeleccionada: number | undefined;
  dataFotoPrincipal = '';
  mostrarGaleria = false;
  rol = this.jwt.decodeToken(localStorage.getItem('token')!).sub.roles;
  veterinarios :Amigo[] = []

  like: boolean | undefined;

  abrirChat: boolean = true;
  botonClicado = '';

  srcFotoAnuncio: string = '';
  nombre: string = '';
  descripcion: string = '';
  contador: number = 0;
  constructor(
    
    private message: MessageService,
    private documentService: DocumentServiceService,
    private servicioUsuario: UsuriosService,
    private router: Router,
    private jwt: JwtHelperService,
    private userRegisterService:UserRegisterService
  ) {}
  ngOnInit(): void {
    this.getVeterianiros();
    this.userRegisterService.tokenExpired(localStorage.getItem("token")!)
    
  }

  anuncio() {
    this.srcFotoAnuncio =
      this.veterinarios[this.contador].foto == ''
        ? '../../../assets/user.png'
        : this.veterinarios[this.contador].foto;
        this.nombre = this.veterinarios[this.contador].name;
        this.descripcion = this.veterinarios[this.contador].descripcion;
        this.contador =
          this.contador < this.veterinarios.length ? this.contador + 1 : 0;
        this.contador =
          this.contador == this.veterinarios.length ? 0 : this.contador;
        setTimeout(() => {
          this.anuncio();
    }, 6000);
  }
  getVeterianiros() {
    this.servicioUsuario.getAllVeterinarios().subscribe((veterList) => {
      veterList.forEach((veter) => {
        this.veterinarios.push(veter);
      });
      if (this.veterinarios.length > 0) {
        this.anuncio();
      }
    });
  }
  mostrarGale() {
    this.router.navigate(['/home/galeria']);

  }
  activarSocial() {
    this.allImg = [];
    this.botonClicado = 'social';
  }

  amigos(){
    this.router.navigate(['home/amigos'])
  }
  inicio(){
    this.router.navigate(['home/inicio'])
  }

  conectado() {
    this.documentService.userConectado;
  }

  activarChat() {
    this.abrirChat = this.abrirChat == true ? false : true;
    this.botonClicado = 'chat';
  }


}
