import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Amigo } from 'src/app/clases/amigo';
import { Comentario } from 'src/app/clases/comentario';
import { Foto } from 'src/app/clases/foto';
import { UsuriosService } from '../../../servicios/usurios.service';
import { formatDate } from '@angular/common';
import { Notificacion } from 'src/app/clases/notificacion';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/servicios/message.service';
import { DocumentServiceService } from 'src/app/servicios/documentService.service';
import { UserRegisterService } from 'src/app/servicios/user-register.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit, OnDestroy{
  dataFotoPrincipal = '';
  nombre = '';
  tipo = '';
  comentarios: Comentario[] = [];
  misAmigos: Amigo[] = [];
  misNoticias: Foto[] = [];
  panelOpenState = false;
  comentarOk = false;
  value: string = ' ';
  id_user :number = 0
  ok: boolean | undefined;
  sinAmigos: boolean = false;


  
  @Input()
  consulta!: boolean;

  @Input()
  veterinario!:boolean

  constructor(
    private userService: UsuriosService,
    private jwt: JwtHelperService,
    private router: Router,
    private userRegisterService:UserRegisterService,
  ) {}
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.id_user = this.jwt.decodeToken(localStorage.getItem('token')!).sub.id;
    if(this.userRegisterService.tokenExpired(localStorage.getItem("token")!)){

      if(this.consulta){
        this.getImgVeter()
      }else{
  
        this.getNoticias();
      }
    }
  }
  getImgVeter(){
      
    let nameEmail=this.jwt.decodeToken(localStorage.getItem("token")!).sub.email
    this.userService.getAllImgVeterByUser(nameEmail!).subscribe(fotos => {
      fotos.forEach((e) => {
        this.misNoticias.push(e);
      });
    })
   
  }

  getNoticias() {
    let email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    this.userService.getAmigos(email).subscribe((e) => {
      this.misAmigos = e;
      if (this.misAmigos.length == 0) {
        this.sinAmigos = true;
      }
      this.misAmigos.forEach((e) => {
        this.userService.getAllImg(e.id_fotos).subscribe((fotos) => {
          fotos.forEach((e) => {
            this.misNoticias.push(e);
          });
        });
      });
    });
  }
  
  getNoticiasPaginadas(skip:number,limit:number) {
    let email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    this.userService.getAmigos(email).subscribe((e) => {
      this.misAmigos = e;
      if (this.misAmigos.length == 0) {
          this.sinAmigos = true;
      }
      this.misAmigos.forEach((e) => {
        this.userService.getImgPaginadas(skip,limit,e.email).subscribe((fotosAndTotal) => {
                
                fotosAndTotal.user.forEach((img: Foto) => {
                this.misNoticias.push(img);
          });
        });
      });
    });
  }

  activarComentarios() {
    this.comentarOk = !this.comentarOk;
  }
  comentar(idFoto: number, emailDestinatario: string, foto: Foto) {
    let email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    let name = this.jwt.decodeToken(localStorage.getItem('token')!).sub.name;
    let formattedDt = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en_US');
    let comentario: Comentario = new Comentario(
      0,
      idFoto,
      email,
      name,
      this.value,
      formattedDt,
      []
    );
    this.userService.createComentario(comentario).subscribe((e) => {});

    this.notificarComentario(emailDestinatario, idFoto);
  }

  notificarComentario(emailDestinatario: string, id: number) {
    let nameUser = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .name;
    let emailUser = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .id_fotos;
    let tipoNoti = 'comentario en foto';
    let notificacion = new Notificacion(
      id,
      emailUser,
      nameUser,
      tipoNoti,
      emailDestinatario,
      new Date()
    );

    this.userService.setNotificaion(notificacion).subscribe((e) => {});
  
  }

  like(id_foto: number) {
    this.ok = true;
    this.userService.addLikeImg(id_foto, this.id_user).subscribe((e) => {
      let a = e;
      this.misNoticias = [];
      this.getNoticias();
    });
  }

  likeComent(id_foto: number, emailUser: string, posicion: number) {
    this.ok = true;
    this.userService.get_one_user(emailUser).subscribe((user) => {
      this.userService
        .addLikeComentario(id_foto, user.id, posicion)
        .subscribe((e) => {
          this.misNoticias = [];
          this.getNoticias();
        });
    });
  }

  amigos() {
    this.router.navigate(['/home/amigos']);
  }
}
