import { formatDate } from '@angular/common';
import { Component, Inject, OnInit,HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Comentario } from 'src/app/clases/comentario';
import { Foto } from 'src/app/clases/foto';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { MessageService } from 'src/app/servicios/message.service';
import { UsuriosService } from 'src/app/servicios/usurios.service';

@Component({
  selector: 'app-img-galeria',
  templateUrl: './img-galeria.component.html',
  styleUrls: ['./img-galeria.component.scss']
})
export class ImgGaleriaComponent implements OnInit {
  foto!:Foto

  titulo: string = '';
  descrpcion: string = '';
  constructor(
    private userService: UsuriosService,
    public dialogRef: MatDialogRef<ImgGaleriaComponent>,
    private jwt:JwtHelperService,
    @Inject(MAT_DIALOG_DATA) public dialog: any,
    private message:MessageService


  ) {
    
  

  }
  ngOnInit(): void {
     this.foto= this.dialog["fotoData"]
    
  }
  actualizar(){

    let foto = new Foto(this.titulo,this.descrpcion,this.foto.foto,this.foto.email,this.foto.principal,this.foto.id,this.foto.comentarios,this.foto.likes,new Date(),this.foto.tipo)
    this.userService.updateImg(foto).subscribe(result =>{
        this.message.createMessage(result)
        console.log(3)

    })
  }
  borrar(){
    if(confirm("Vas a elminiar la foto")){
      
      let foto = new Foto(this.titulo,this.descrpcion,this.foto.foto,this.foto.email,this.foto.principal,this.foto.id,this.foto.comentarios,this.foto.likes,new Date(),this.foto.tipo)
      this.userService.deleteImg(foto).subscribe(result => {
        this.message.createMessage(result)

      })
    }
      
  }
  

}

