import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { UserRegisterService } from 'src/app/servicios/user-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FaceDog';


  
  recargarMenu : Subject <boolean> = this.userService.recargar;
  
  constructor(private jwt:JwtHelperService,private userService:UserRegisterService) { }


  
}
