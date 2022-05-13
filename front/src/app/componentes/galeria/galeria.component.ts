import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Foto } from 'src/app/clases/foto';
import { MessageService } from 'src/app/servicios/message.service';
import { UserRegisterService } from 'src/app/servicios/user-register.service';
import { UsuriosService } from 'src/app/servicios/usurios.service';
import { ImgGaleriaComponent } from '../img-galeria/img-galeria.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})


export class GaleriaComponent implements OnInit {
  allImg:Foto[] = []
  constructor(    private message: MessageService,
    private jwt:JwtHelperService,private servicioUsuario:UsuriosService,public dialog: MatDialog,private router:Router,
    private userRegisterService:UserRegisterService,) { }

  ngOnInit(): void {
    this.getAllImageUser()
    if(this.userRegisterService.tokenExpired(localStorage.getItem("token")!)){

      
    }
  }
  getAllImageUser() {
    let nameEmail = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .email;

    this.allImg = [];
    this.servicioUsuario.getAllImg(nameEmail).subscribe((data) => {
      data.forEach((e) => this.allImg.push(e));
    
    });
  }
  openDialog(foto: Foto) {
    const dialogRef = this.dialog.open(ImgGaleriaComponent, {
      width: '700px',
      height: '400px',
      data: {
        fotoData: foto,
      },
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    this.allImg=[]
     this.getAllImageUser()
    });
  }

  imagenPrincipal(img:Foto) {
  
    this.servicioUsuario.updatePrincipalImg(img).subscribe((e) => {
        this.message.createMessage("foto actualizada correctamente")
    });
  }
}