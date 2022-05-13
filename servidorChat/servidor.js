cd
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const documents = {};
const users = {};

io.on("connection", socket => {
    let previousId;
  
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
      previousId = currentId;
    }
  })
io.on("connection", socket => {

    socket.on("getDoc", docId => {
    //  safeJoin(docId);  ME DA ERROR ESTE METODO 
      documento=documents[docId]
      
      socket.emit("document", documento);
     
    });

  });
  io.on("connection", socket => {

    socket.on("addDoc", doc => {
      
      if(documents[doc.id] != null){
        socket.emit("document", documents[doc.id]);
      }else{
        documents[doc.id] = doc
        socket.emit("document",doc);
      }
   //   safeJoin(doc.id);
    //  socket.emit("documents", Object.keys(documents));
      
    });

  });

  io.on("connection", socket => {
    socket.on("editDoc", doc => {
      documents[doc.id] = doc;
    
      io.emit("document", doc);
      
     
    });
    
    console.log(`EL SOCKET CONECTADO`)

  });
  
  io.on("connection", socket => {
    socket.on("userConec", name => {
      
      
      io.emit("name", name);
    })
     
    });
    
    
  io.on("connection", socket => {
    
    io.emit("documents", Object.keys(documents));
    console.log(`Socket ${socket.id} has connected `,documents);
   
  });

  http.listen(3000, () => {
    console.log('Listening on port 3000');
  });


//----
io.on("connection", socket => {

  socket.on("getNotificacion", docId => {
  //  safeJoin(docId);  ME DA ERROR ESTE METODO 
    documento=documents[docId]
    
    socket.emit("Notificacion", documento);
   
  });

});
io.on("connection", socket => {

  socket.on("addNotificacion", doc => {
    
    if(documents[doc.id] != null){
      socket.emit("Notificacion", documents[doc.id]);
    }else{
      documents[doc.id] = doc
      socket.emit("Notificacion",doc);
    }
 //   safeJoin(doc.id);
  //  socket.emit("documents", Object.keys(documents));
    
  });

});

io.on("connection", socket => {
  socket.on("editNotificacion", doc => {
    console.log(doc,"documento emitido")
    documents[doc.id] = doc;
    io.emit("Notificacion", doc);
    
    
  });


});


  
io.on("connection", socket => {
  
  io.emit("Notificaciones", Object.keys(documents));
  console.log(`Socket ${socket.id} has connected `,documents);
 
});
