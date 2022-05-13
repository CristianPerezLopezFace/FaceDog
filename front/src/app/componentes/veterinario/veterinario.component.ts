import { Component, Input, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { UsuriosService } from '../../servicios/usurios.service';
import { Foto } from '../../clases/foto';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comentario } from 'src/app/clases/comentario';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.scss']
})
export class VeterinarioComponent implements OnInit {


  public archivo={
    nombreArchivo:null,
    base64textString:""
  };
  contacForm:FormGroup
  fotoPrincipal=""

  closeResult = '';
  video:any
  type = ""

  @Input()
  anuncio!:boolean

  
  constructor(private modalService: NgbModal,private userService:UsuriosService,private jwt:JwtHelperService) { 
    this.contacForm =new FormGroup({
        
      tipourgencia: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      fecha: new FormControl('',[Validators.required]),
      foto: new FormControl('',[Validators.required]),
    
      });
  }

  ngOnInit(): void {
  }
  addFoto(){
    
    let tipourgencia=this.contacForm.controls["tipourgencia"].value
    let descrpcion= this.contacForm.controls["descripcion"].value
    let fecha= this.contacForm.controls["fecha"].value
    let emailFoto=this.jwt.decodeToken(localStorage.getItem("token") !).sub.email;
    let dataFoto="data:image/png;base64,"+this.archivo.base64textString
    
    if(dataFoto.length>25){
         let foto = new Foto("tipourgencia",descrpcion,dataFoto,emailFoto,0,0,[],[],new Date(),"veterinario");
         this.userService.addImage(foto).subscribe((m)=>{
            window.location.reload();
            alert("Subida correctamente")  

      })
    }else{
      alert("no has añadido ninguna foto")
    }
    
  }
  fileEvent(event: any){
    var files=event.target.files;
    var file=files[0];
    this.archivo.nombreArchivo=file.name;
    if(file && files)    {
     
      var reader = new FileReader();
      reader.onload=this._handleReaderLoader.bind(this);  
      reader.readAsBinaryString(file);
    }
   }
   _handleReaderLoader(readerEvent:any){
    
    var binaryString=readerEvent.target.result;
    this.archivo.base64textString=btoa(binaryString);
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
  private fileChangeListener($event:any ) {
    let fileList: FileList = $event.target.files;
  
    if (fileList.length > 0) {
        let file: File = fileList[0];
        console.log('video seleccionado', file);
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = (loadEvent: any) => {
            console.log('video', myReader.result);
            this.video = myReader.result;
            this.type = file.type;
        };
        myReader.readAsDataURL(file);
    }
}
}