import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Doc ,Document} from '../clases/Documento';
import { DocumentServiceService } from './documentService.service';

@Injectable({
  providedIn: 'root'
})
export class ControlSocketsService {




  document!: Document ;
  private _docSub!: Subscription;
  token = ""

  documents!: Observable<[]>;
  currentDoc!: string;
  email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;

  usuariosConectados=[]
  constructor(
    private documentService: DocumentServiceService,
    private jwt: JwtHelperService
  ) {}

  loadDoc(id: string) {
    this.documentService.getDocument(id);
  }
  
  
  cargarDocumento() {
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


  iniciarDocumentosConectados(){
      
      // this.token = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
      // this.cargarDocumento();
      // this.newDoc();
      // this.loadDoc('conectados');
      // setTimeout(() => {this.addUserConectado()},2000);

      // setTimeout(() => {this.iniciarDocumentosConectados()},8000);

  }
    
  getUsuariosRegistrados() {
      //  return this.document.conectados
  }

  addUserConectado() {
  //   let estaConectado=true
  //   if(  this.document.conectados.filter(i => (i === this.email)).length ) {
  //         estaConectado=true;
  //     } else {
  //         estaConectado= false;
  //     }
  //   if(!estaConectado){
  //       this.document.conectados.push(this.email);
  //   }
  //   console.log(this.document.conectados)
  //   this.documentService.editDocument(this.document);  
  // }
  // borrarUserConectado(){
  //     console.log(this.document.conectados,"borrando 1")
 

  //     this.documentService.borrarDocumento(this.document.id);  


  }

  newDoc() {
    let nameUser = this.jwt.decodeToken(localStorage.getItem('token')!).sub
      .name;
    let email = this.jwt.decodeToken(localStorage.getItem('token')!).sub.email;
    let token = this.jwt.decodeToken(localStorage.getItem('token')!);
    let conectados:Doc[]=[]
    
    let doc = new Doc('', '', new Date(), email);
    let docs: Doc[] = [];
    docs.push(doc);
    let document;

    document = new Document('conectados', docs, token, conectados);
    
    this.documentService.newDocument(document);
  }


}
