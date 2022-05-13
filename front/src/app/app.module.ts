import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ParquesComponent } from './componentes/consultas/consultas.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';
import { AmigosComponent } from './componentes/amigos/amigos.component';

import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NoticiasComponent } from './componentes/inicio/noticias/noticias.component';
import { SubirFotoComponent } from './componentes/inicio/subir-foto/subir-foto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './servicios/http-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { PerfilAmigoComponent } from './componentes/perfil-amigo/perfil-amigo.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './componentes/chat/chat.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoaderInterceptors } from './servicios/loader.interceptors';
import { LoaderService } from './servicios/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeterinarioComponent } from './componentes/veterinario/veterinario.component';
import { VistaVeterinarioComponent } from './componentes/vista-veterinario/vista-veterinario.component';
import { Safe } from './shared/safe';
import { DatePipe } from '@angular/common';
import { DateChangePipe } from './shared/date-change.pipe';
import { TarNoticiaComponent } from './componentes/inicio/noticias/tar-noticia/tar-noticia.component';
import { ComentarioComponent } from './componentes/inicio/noticias/tar-noticia/comentario/comentario.component';
import { MatDialogModule } from '@angular/material/dialog';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './componentes/home/home.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ImgGaleriaComponent } from './componentes/img-galeria/img-galeria.component';
import {MatSelectModule} from '@angular/material/select';
import { AministracionComponent } from './componentes/aministracion/aministracion.component';
import { ActualizarUserComponent } from './componentes/actualizar-user/actualizar-user.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { MenuNavComponent } from './componentes/menu-nav/menu-nav.component';
import { AmpliarFotoComponent } from './componentes/ampliar-foto/ampliar-foto.component';
// import { DatePipe } from '@angular/common';
// import { DateChangePipe } from './shared/date-change.pipe'

//  import { SafePipe } from './shared/url-transform-pipe';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const configNotificaciones: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NoticiasComponent,
    SubirFotoComponent,
     MenuNavComponent,
     InicioComponent,
     ParquesComponent,
     ZonasComponent,
     AmigosComponent,
     PerfilComponent,
     PerfilAmigoComponent,
     ChatComponent,
     ProgressSpinnerComponent,
     VeterinarioComponent,
     VistaVeterinarioComponent,
     Safe,
     DateChangePipe,
     TarNoticiaComponent,
     ComentarioComponent,
     HomeComponent,
     NotificacionComponent,
     ImgGaleriaComponent,
     AministracionComponent,
     ActualizarUserComponent,
     GaleriaComponent,
     AmpliarFotoComponent,
    //  DatePipe,
    
   
     
  ],
  imports: [
    MatSelectModule,
    IvyCarouselModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,

    
    
  ],
  providers: [ 
    LoaderService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService , multi: true }
    ,{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptors   , multi: true }
    ,{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
