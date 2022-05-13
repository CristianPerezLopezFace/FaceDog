import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Foto } from 'src/app/clases/foto';
import { MessageService } from 'src/app/servicios/message.service';
import { UsuriosService } from 'src/app/servicios/usurios.service';
import { NotificacionComponent } from '../notificacion/notificacion.component';

@Component({
  selector: 'app-ampliar-foto',
  templateUrl: './ampliar-foto.component.html',
  styleUrls: ['./ampliar-foto.component.scss']
})
export class AmpliarFotoComponent implements OnInit {


  foto:Foto= this.dialog["foto"]
  srcFoto=""
  constructor(   private userService: UsuriosService,
    public dialogRef: MatDialogRef<NotificacionComponent>,
    private jwt:JwtHelperService,
    @Inject(MAT_DIALOG_DATA) public dialog: any,
    private message:MessageService
) { }

  ngOnInit(): void {
    this.srcFoto = this.foto.foto
  }

}
