import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { DocumentServiceService } from 'src/app/servicios/documentService.service';
import { MessageService } from 'src/app/servicios/message.service';
import { UserRegisterService } from 'src/app/servicios/user-register.service';

import { Foto } from '../../clases/foto';
import { UsuriosService } from '../../servicios/usurios.service';
import { ImgGaleriaComponent } from '../img-galeria/img-galeria.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {


  allImg: Foto[] = [];
  foto!: Foto;

  idFotoSeleccionada: number | undefined;
  dataFotoPrincipal = '';
  mostrarGaleria = false;
  rol = this.jwt.decodeToken(localStorage.getItem('token')!).sub.roles;
  srcCargando = `../assets/cargango.gif`;

  like: boolean | undefined;

  abrirChat: boolean = true;

  cssUrl!: string;
  srcUrl: any;

  botonClicado = '';

  constructor(
    public sanitizer: DomSanitizer,
    
    private message: MessageService,
    private documentService: DocumentServiceService,
    private servicioUsuario: UsuriosService,
    private router: Router,
    private jwt: JwtHelperService,
    private userRegisterService:UserRegisterService
  ) {
    this.cssUrl = `../shared/styles2.scss`;
  }
  ngOnInit(): void {

    this.userRegisterService.tokenExpired(localStorage.getItem("token")!)

      
    
  }

  getAllImageUser() {
    let nameEmail = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .email;

    this.allImg = [];
    this.servicioUsuario.getAllImg(nameEmail).subscribe((data) => {
      data.forEach((e) => this.allImg.push(e));
    
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
  conectado() {
    this.documentService.userConectado;
  }

  activarChat() {
    this.abrirChat = this.abrirChat == true ? false : true;
    this.botonClicado = 'chat';
  }

  changeStyle() {
    console.log('estiloss');
    this.cssUrl =
      this.cssUrl === `/shared/styles2.scss`
        ? `/shared/styles3.scss`
        : `./shared/styles2.scss`;
    let srcUr = this.sanitizer.bypassSecurityTrustUrl(this.cssUrl);
    this.srcUrl = srcUr;
  }
  personas(){
    this.router.navigate(['home/amigos'])
  }

  consultas(){
    
    this.router.navigate(['home/consultas'])
  }
}
