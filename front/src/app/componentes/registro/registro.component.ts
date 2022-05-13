import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Usuario } from '../../clases/usuario';

import { Router } from '@angular/router';
import { UsuriosService } from 'src/app/servicios/usurios.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {



  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  nameFormControl = new FormControl('', [Validators.required]);
  apellidoFormControl = new FormControl('', []);
  descripcionFormControl = new FormControl('', [Validators.required]);
  elegirTipo = new FormControl();
  elegirCiudad = new FormControl();

  matcher = new MyErrorStateMatcher();
  // contacForm:FormGroup
  ciudad:string=""
  tipocuenta=  [
    
     "Usuario"
   ,
   "Veterinario"
    ]
  ciudades=['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
  'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
  'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
  'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
  'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

   

  constructor(private serviceUser:UsuriosService,private router:Router,private message:MessageService) { 

  }

  ngOnInit(): void {
   
  }
  addUser(){
    let email=this.emailFormControl.value
    let password = this.passwordFormControl.value
    let name=this.nameFormControl.value
    let surName = this.apellidoFormControl.value
    // let city=this.elegirCiudad.value
    let rol=this.elegirTipo.value[0]
    let descrip=this.descripcionFormControl.value

    let user=new Usuario(password,name,surName,"Granada",email,rol,0,descrip);
    console.log(user)
    this.serviceUser.create_user(user).subscribe((menssag) => {        
      this.message.createMessage(menssag)
      this.router.navigate([''])
    },(error) => {
        this.message.createMessage(error.error.detail)
    })
    
  }
  login(){
    
    this.router.navigate([''])  }
}


//errores de el formulario reactivo
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}