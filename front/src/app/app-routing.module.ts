import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './componentes/amigos/amigos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MyCanActive } from './Guards/my-can-active';
import { AdminGuard } from './Guards/admin.guard';
import { PerfilAmigoComponent } from './componentes/perfil-amigo/perfil-amigo.component';
import { VistaVeterinarioComponent } from './componentes/vista-veterinario/vista-veterinario.component';
import { ParquesComponent } from './componentes/consultas/consultas.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppGuard } from './shared/app.guard';
import { AministracionComponent } from './componentes/aministracion/aministracion.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';


const routes: Routes = [

    {
      path: 'home',
      component: HomeComponent,
      children: [
        {path : 'inicio',component:InicioComponent,canActivate: [AppGuard] },
        {path : 'veterinario',component:VistaVeterinarioComponent,canActivate: [AppGuard]},
        {path : 'zonas',component:ZonasComponent,canActivate: [AppGuard]},
        {path : 'consultas',component:ParquesComponent,canActivate: [AppGuard]},
        {path : 'amigos',component:AmigosComponent,canActivate: [AppGuard]},
        {path : 'perfil',component:PerfilComponent,canActivate: [AppGuard]},
        {path : 'perfilamigo',component:PerfilAmigoComponent,canActivate: [AppGuard]},
        {path : 'administrador',component:AministracionComponent,canActivate: [AppGuard]},
        {path : 'galeria',component:GaleriaComponent,canActivate: [AppGuard]},
      ], 
      canActivate: [AppGuard]
    },
    { path: '', component: LoginComponent },
    {path : 'registro',component:RegistroComponent},

  ]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
   exports: [ RouterModule]
  ,providers : [ MyCanActive, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService, AdminGuard ]
})
export class AppRoutingModule { }
