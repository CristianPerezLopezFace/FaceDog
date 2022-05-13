import { Component, HostListener, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription, Observable, Subject } from 'rxjs';

import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { UserRegisterService } from 'src/app/servicios/user-register.service';
import { Notificacion } from '../../clases/notificacion';
import { UsuriosService } from '../../servicios/usurios.service';
import { MatDialog } from '@angular/material/dialog';
import { Foto } from 'src/app/clases/foto';
import { NotificacionComponent } from '../notificacion/notificacion.component';
import { ControlSocketsService } from 'src/app/servicios/control-sockets.service';










@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
})




export class MenuNavComponent implements OnInit {
  nombreUsuario: string = '';
  dataFotoPrincipal = '';
  nombreNotifi = '';
  tipo = '';
  fechaNotifi!: Date;
  notificaciones: Notificacion[] = [];
  rol = '';

  repetir = true;
  closeResult = '';

  foto!: Foto;

  recargarMenu: Subject<boolean> = this.userRegisterService.recargar;
  constructor(
    public dialog: MatDialog,
    private notifcacionService: NotificacionService,
    private userRegisterService: UserRegisterService,
    private router: Router,
    private userService: UsuriosService,
    private jwt: JwtHelperService,
    private sockerService:ControlSocketsService
  ) {}

  ngOnInit() {
    this.getPropiedadesToken();
  }

  inicio(){
    console.log(this.rol)
    if(this.rol == "Usuario"){  
           
        this.router.navigate(['home/inicio'])
    }else if(this.rol == "Veterinario"){  
      this.router.navigate(['home/veterinario'])
    }
      
  }
  amigos(){
    this.router.navigate(['home/amigos'])
  }
  zonas(){
    this.router.navigate(['home/zonas'])
  }
  consultas(){
    
    this.router.navigate(['home/consultas'])
  }
  ngOnDestroy(): void {
    console.log("destruyendo el NAV")

  }
  getPropiedadesToken() {
    if (this.jwt.decodeToken(localStorage.getItem('token')!)) {
      this.nombreUsuario = this.jwt.decodeToken(
        localStorage.getItem('token')!
      ).sub.name;
      this.getNotificaion();
      this.rol = this.jwt.decodeToken(localStorage.getItem('token')!).sub.roles;
    }
  }


  existToken() {
    let token = localStorage.getItem('token');
    return token != null ? true : false;
  }
  logout() {
    this.router.navigate(['']);
    localStorage.removeItem('token');
  }

  getNotificaion() {
    let emailUser = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .email;
    let contador = 0;
    this.userService.getNotificacion(emailUser).subscribe((e) => {
      this.notificaciones = [];
      for (let index = 0; index < e.length; index++) {
        this.notificaciones.push(e[index]);
      }
 
    });
  }
  // imagenPrincipal(){
  //   let emailUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.email;
  //   this.userService.getImagePrincipal(emailUser).subscribe((e) => {
  //           if(e.foto != null){

  //             this.dataFotoPrincipal=e.foto
  //           }
  //   })
  // }
  openDialog(noti: Notificacion) {
    const dialogRef = this.dialog.open(NotificacionComponent  ,{
      width: '700px',
      height : '500px',
      data: {
        notificaion:noti,
        
      }
    })

    dialogRef.afterClosed().subscribe(result => {

      console.log(`Dialog result: ${result}`);
    });

    dialogRef.afterClosed().subscribe(result => {
     
      this.ngOnInit() 
    })
    }
  }