import { formatDate } from '@angular/common';
import { Component, Inject, OnInit,HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Comentario } from 'src/app/clases/comentario';
import { Foto } from 'src/app/clases/foto';
import { Notificacion } from 'src/app/clases/notificacion';
import { Usuario } from 'src/app/clases/usuario';
import { MessageService } from 'src/app/servicios/message.service';
import { UsuriosService } from 'src/app/servicios/usurios.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent implements OnInit {
  foto!: Foto;
  srcFoto!: string;
  idbjetoSeleccionado!:number
  id_user=this.jwt.decodeToken(localStorage.getItem("token")!).sub.id
  ok : boolean | undefined
  value:string=" "
  amigo!:Usuario
  notificacion:Notificacion= this.dialog["notificaion"]
  constructor(
    private userService: UsuriosService,
    public dialogRef: MatDialogRef<NotificacionComponent>,
    private jwt:JwtHelperService,
    @Inject(MAT_DIALOG_DATA) public dialog: any,
    private message:MessageService


  ) {
    


  }
  ngOnInit(): void {
   
    this.idbjetoSeleccionado=this.dialog["notificaion"].idObj
    this.notificacion=this.dialog["notificaion"]
    this.getImagen(this.idbjetoSeleccionado)
  }

  getImagen(id_Objeto: number) {
   


      if(this.notificacion.tipo == "comentario en foto"){
            this.userService.getImage(id_Objeto).subscribe((foto) => {
              this.foto = foto;
              this.srcFoto=this.foto.foto

            });
      }else if(this.notificacion.tipo == "solicitud de amistad"){
          this.userService.get_one_user_by_id(id_Objeto).subscribe((userAmigo) => {
                this.amigo = userAmigo                    

                this.userService.getImagePrincipal(userAmigo.email).subscribe(foto => {
                    this.foto = foto;
                    console.log(this.foto)
                    this.srcFoto=this.foto.foto
                })
          });

       }else if(this.notificacion.tipo == "ampliarFoto"){    

              this.userService.getImage(id_Objeto).subscribe(foto => {
                  this.foto = foto;
                  console.log(this.foto)
                  this.srcFoto=this.foto.foto
              })
     }
  
  }
  
  like(id_foto:number){
    this.ok=true
    this.userService.addLikeImg(id_foto,this.id_user).subscribe(e => {
       
    })
    setTimeout(() =>  this.ok=false, 1000);
    
    setTimeout(() => { this.getImagen(this.idbjetoSeleccionado); this.ngOnInit()}, 1000);
  }
  comentar(idFoto:number,emailDestinatario:string,foto:Foto){
    
    let email=this.jwt.decodeToken(localStorage.getItem("token")!).sub.email
    let name=this.jwt.decodeToken(localStorage.getItem("token")!).sub.name
    let formattedDt = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en_US')
    let comentario:Comentario=new Comentario(0,idFoto,email,name,this.value,formattedDt,[])
    if(this.value!= ""){

      this.userService.createComentario(comentario).subscribe(e => {

        this.notificarComentario(emailDestinatario,idFoto)
      })     
    }

  }
  
  notificaionVista(noti: Notificacion) {
    console.log("notiifiicacaaaiononnnn")
    if (noti.tipo == 'solicitud de amistad') {
      let aceptar = confirm('Aceptar peticion');
      if (aceptar) {
        this.userService.aceptarAmgio(noti).subscribe((e) => {
        });
      }
    }
    if (noti.tipo == 'comentario en foto') {
      this.userService.borrarNotificacionComentario(noti).subscribe((e) => {
                       
      });
    }
  }

  
  notificarComentario(emailDestinatario:string,id:number){
    let nameUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.name;
    let emailUser=this.jwt.decodeToken(localStorage.getItem("token") !).sub.id_fotos;
    let tipoNoti="comentario en foto"
    let notificacion=new Notificacion(id,emailUser,nameUser,tipoNoti,emailDestinatario,new Date())
  
    this.userService.setNotificaion(notificacion).subscribe(e =>{
        this.ngOnInit()
        this.message.createMessage("Respuesta realizada")
    })
   
  }
  aceptarPeticion(){
      this.userService.aceptarAmgio(this.notificacion).subscribe(e =>{
        this.dialogRef.close()
        this.message.createMessage("Amigo aceptado")

      })
  }
  rechazarPeticion(){
    this.userService.borrarNotificacionComentario(this.notificacion).subscribe(e =>{
        this.dialogRef.close()
        this.message.createMessage("Peticion rechazada")

    })
}
  @HostListener('document:click') eventClickOut(){
    
    this.dialogRef.backdropClick().subscribe(e => {
      this.notificaionVista(this.dialog["notificaion"])  
    })

  }
}
