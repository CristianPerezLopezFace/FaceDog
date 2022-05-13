import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentServiceService } from '../../servicios/documentService.service';
import { startWith } from 'rxjs/operators';
import { Document, Doc } from '../../clases/Documento';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  document!: Document;
  private _docSub!: Subscription;
  token = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;

  value: string = '';
  textoMostrar = '';
  documents!: Observable<[]>;
  currentDoc!: string;
  email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;

  contadorMenss = 0;
  repetir = true;
  closeResult = '';

  usuariosConectados=[]
  @Input()
  consulta!: boolean;

  constructor(
    private documentService: DocumentServiceService,
    private jwt: JwtHelperService
  ) {}
  // @ViewChild('chat') element: ElementRef | undefined;

  ngAfterViewInit() {}
  miMensaje(email: string) {
    return this.email == email ? true : false;
  }
  ngOnInit() {
    this.cargarDocumento();
    this.contadorMenss = this.document.doc.length;

    this.newDoc();
    // if (this.consulta) {
    //   this.loadDoc('chat consultas');
    // } else {
    //   this.loadDoc('chat global');
    // }
    this.loadDoc('chat');

    setTimeout(() => {this.scroll()}, 100);
   

  }

  cargarDocumento() {
    this.token = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    let name: string = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .name;

    let listaDoc: Doc[] = [];
    let docu = new Doc(
      name,
      'Selecciona un chat o crea uno nuevo',
      new Date(),
      this.email
    );
    listaDoc.push(docu);
    this._docSub = this.documentService.currentDocument
      .pipe(startWith(new Document(name, listaDoc, this.token, [])))
      .subscribe((document) => {
        this.document = document;
      });
  }

  editDoc() {
    let name: string = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .name;
    let frase = this.value;

    if(this.consulta){
      let doc = new Doc(name, frase, new Date(), this.email);
      this.document.chatVeterinario.push(doc)
    }else{
      let doc = new Doc(name, frase, new Date(), this.email);
      this.document.doc.push(doc);

    }
    this.documentService.editDocument(this.document);
    this.value = '';
    setTimeout(() => this.scroll(), 100);
  }
  ngOnDestroy() {
    
  }

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }
    

  comprobarUserConectado(email:string){
      // let conect = false
      // if(this.document.chatVeterinario.find(userEmail => userEmail = email)) {
      //     conect =true
      // }
      // return conect
  }

  newDoc() {
    let nameUser = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .name;
    let email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    let token = this.jwt.decodeToken(localStorage.getItem('token')!);
    let chatVeter:Doc[]=[]
    
    let doc = new Doc('', '', new Date(), email);
    let docs: Doc[] = [];
    docs.push(doc);
    let document;

    // if (this.consulta) {
    //   document = new Document('chat consultas', docs, token, chatVeter);
    // } else {
    //   document = new Document('chat global', docs, token, chatVeter);
    // }
   document = new Document('chat', docs, token, chatVeter);

    this.documentService.newDocument(document);
  }
  levantaTecla(event: any) {
    if (event.keyCode == 13) {
      this.editDoc();
      setTimeout(() => this.scroll(), 100);
    }
  }
  scroll() {
    let contenedorChat = document.getElementsByName('tarjet')[0];
    contenedorChat.scrollTop = contenedorChat.scrollHeight;
  }

}
