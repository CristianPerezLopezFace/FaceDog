import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from 'src/app/clases/usuario';
import { UsuriosService } from 'src/app/servicios/usurios.service';
import { ActualizarUserComponent } from '../actualizar-user/actualizar-user.component';

@Component({
  selector: 'app-aministracion',
  templateUrl: './aministracion.component.html',
  styleUrls: ['./aministracion.component.scss']
})
export class AministracionComponent implements OnInit {
  users:Usuario[] = []
  total!:number

  limit:number=20;
  skip:number=0;
  sumPaginator:number=0;
  
  menssag!:string;
  selectId!:string;
  userRegister!:string;
  
  actualizarBol:boolean=false
  controlarRol= "Usuario"
  usuario!:Usuario

  // user!:Usuario;
  constructor(    public dialog: MatDialog,private  jwt :JwtHelperService,private userService:UsuriosService,private router:Router) { }
  ngOnInit(): void {
    this.getAllUser(this.controlarRol)
  }



 getAllUser(rol:string){
       this.controlarRol = rol
       if(this.tokenExpired()){
       this.userRegister=this.jwt.decodeToken(localStorage.getItem("token")!).sub.name
       this.users = []        
       this.userService.find_all_users(this.skip,this.limit,rol).subscribe(data =>  {            
               data.users.forEach((element: any) => 
                   this.users.push(element)
               )    
               this.total=data.total       
           }),((error: { error: { detail: string | undefined; }; }) => {
                    confirm(error.error.detail)
           })
       }else{
           confirm("Acces expired sorry  :(")
       }
 }

 borrar(id:number){
     this.userService.deleteUser(id)
               .subscribe((menssag) => {
                   this.users= this.users.filter( (ele) => ele.id != id) 
                   confirm(menssag)
                   this.skip=0;
                   this.sumPaginator=0;
                   this.getAllUser(this.controlarRol)
               },((err) => confirm(err.error.detail)))

 }

 next(){
     this.skip+= this.skip >this.total ?  0: this.limit   
     this.sumPaginator += this.sumPaginator > this.total ? 0 : this.users.length
     this.getAllUser(this.controlarRol)
 }
 previus(){
      this.skip-= this.skip <= 0? 0: this.limit
      this.sumPaginator-=this.sumPaginator < 1 ? 0: this.limit
      this.sumPaginator=this.sumPaginator < 0 ? 0 : this.sumPaginator
      this.getAllUser(this.controlarRol)
      
 }

 get Skip(){
   
     return this.skip+=this.limit

 }
 get sumPag(){
     return this.sumPaginator < this.total ? this.sumPaginator :this.total 
 }
 tokenExpired(){
       let ok=true;
       if(this.jwt.isTokenExpired(localStorage.getItem("token")!)){
           localStorage.removeItem("token")
           ok =false
       }else{
           ok=true
       }
       return ok
 }
  
actualizar(user:Usuario){
    this.usuario=user
    this.actualizarBol=this.actualizarBol?false:true
}
cerrar(){
  this.actualizarBol=this.actualizarBol?false:true

}

openDialog(usuario:Usuario) {
    const dialogRef = this.dialog.open(ActualizarUserComponent  ,{
      width: '700px',
      height : '500px',
      data: {
        user:usuario,
        
      }
    })
}
}