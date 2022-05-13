export class Document {
    id!: string;
    doc!: Doc[];
    token!:string;
    chatVeterinario!:Doc[];  
    
    constructor(id:string,doc:Doc[],tok:string,chatVeterinario:Doc[]){
      this.id=id;
      this.doc=doc;
      this.token=tok;
      this.chatVeterinario=chatVeterinario;
    }
  }
  export class Doc {
    name!: string;
    doc!: string;
    fecha! : Date;
    email! :string
     
    
    constructor(name:string,doc:string,fecha:Date,email:string){
      this.name=name;
      this.doc=doc;
      this.fecha=fecha
      this.email=email
  
    }
  }