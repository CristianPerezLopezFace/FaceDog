import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { MessageService } from 'src/app/servicios/message.service';
import { UsuriosService } from 'src/app/servicios/usurios.service';

@Component({
  selector: 'app-actualizar-user',
  templateUrl: './actualizar-user.component.html',
  styleUrls: ['./actualizar-user.component.scss']
})
export class ActualizarUserComponent implements OnInit {

  contacForm:FormGroup
  usuario!:Usuario
  messageNoneId: boolean = false;
  email!:string;



  constructor(  @Inject(MAT_DIALOG_DATA) public dialog: any,private usuarioService: UsuriosService,private message: MessageService,) {
      this.contacForm = new FormGroup({
      id: new FormControl("",[Validators.required]),
      nameUs: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.minLength(10)]),
      
      password: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[]),
      city: new FormControl('',[]),
      rol: new FormControl('',[]),
      descrip: new FormControl('',[]),
      
  });
  
}
ngOnInit(): void {
  this.usuario = this.dialog["user"]
  this.loadUser()
}
async updateUser(){
    let id = this.contacForm.controls["id"].value
    let name = this.contacForm.controls["nameUs"].value
    let email = this.contacForm.controls["email"].value
    let password = this.contacForm.controls["password"].value
    let apellido = this.contacForm.controls["apellido"].value
    let city = this.contacForm.controls["city"].value
    let rol =this.contacForm.controls["rol"].value
    let descrip = this.contacForm.controls["descrip"].value
    
    this.usuarioService.update_User(id,new Usuario(password,name,apellido,city,email,rol,0,descrip)).subscribe( (data) => {
        this.message.createMessage(data)
    }, (error) => {
        this.message.createMessage(error.error.detail)
    });

} 
loadUser(){
    
    let email = this.contacForm.controls["email"].value
    this.usuarioService.get_one_user(this.usuario.email).subscribe(getUser => {
        this.usuario=getUser
    
        console.log(this.usuario)
        this.contacForm.controls["nameUs"].setValue(this.usuario.name)
        this.contacForm.controls["id"].setValue(this.usuario.id)
        this.contacForm.controls["email"].setValue(this.usuario.email)
        this.contacForm.controls["password"].setValue(getUser.password)
        this.contacForm.controls["apellido"].setValue(getUser.surName ? getUser.surName : "")
        this.contacForm.controls["city"].setValue(getUser.ciudad ? getUser.ciudad : " ")
        this.contacForm.controls["rol"].setValue(getUser.roles)  
        this.contacForm.controls["descrip"].setValue(getUser.descripcion ? getUser.descripcion : "")
          
  },((erro) => { confirm(erro.error.detail)} ) )
 
}





}
