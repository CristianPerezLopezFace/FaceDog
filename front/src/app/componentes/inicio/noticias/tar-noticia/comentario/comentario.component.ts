import { Component, Input, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Comentario } from 'src/app/clases/comentario';
import { Foto } from 'src/app/clases/foto';
import { UsuriosService } from 'src/app/servicios/usurios.service';


@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  @Input()
  veterinario!:boolean

  @Input()
  comentario!:Comentario

  @Input()
  idFoto!:number

  @Input()
  posicionEnLista!:number

  foto!:Foto;
  ok:boolean= false
  email= this.jwt.decodeToken(localStorage.getItem("token")!).sub.email
  constructor(private jwt:JwtHelperService,private userService:UsuriosService) { }

  ngOnInit(): void {
    
    this.getFoto()
  }

  getFoto(){

    this.userService.getImage(this.idFoto).subscribe((foto) => {
         this.foto = foto;
    });
  }


  likeComent(id_foto:number,emailUser:string){
    this.userService.get_one_user(emailUser).subscribe(user => {

            this.userService.addLikeComentario(id_foto,user.id,this.posicionEnLista).subscribe(e => {
                    this.ok = true
                    this.getFoto()

            })
    })
 

   
 
  }

}
