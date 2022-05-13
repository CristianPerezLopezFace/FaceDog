import { Component, OnInit } from '@angular/core';
import { UsuriosService } from '../../servicios/usurios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../clases/login';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'src/app/servicios/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  contacForm: FormGroup;
  constructor(
    private servicioUsuario: UsuriosService,
    private router: Router,
    private jwt:JwtHelperService,
    private message:MessageService
  ) {
    this.contacForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }
  

  login() {
    let email = this.contacForm.controls['email'].value;
    let password = this.contacForm.controls['password'].value;

    if (email && password) {
      let login = new Login(email, password);
      localStorage.removeItem('token');

      this.servicioUsuario.loging_User(login).subscribe(
        (token) => {
          localStorage.setItem('token', token);

          this.servicioUsuario.loging_User(login).subscribe((token) => {
                
                let rol=this.jwt.decodeToken(localStorage.getItem("token")!).sub.roles
                  if(rol == "Veterinario"){

                    this.router.navigate(['/home/veterinario']);
                  }else if(rol == "Usuario"){

                    this.router.navigate(['/home/inicio']);
                  }
                  else if(rol == "Admin"){

                    this.router.navigate(['/home/administrador']);
                  }
          });
        },
        (err) => this.message.createMessage(err.error.detail)
      );
    } else {
      this.message.createMessage('Rellena los campos requeridos');
    }
  }
 
}
