io = require('socket.io')(8000);
utils = require('./utils/utils.js');

console.log("socket listening on 8000");





io.use(function (socket, next){


	console.log("Middleware called...")
    //console.log("init data -> "+ JSON.stringify(socket.handshake.query.auth_token));
    // auth_token = socket.handshake.query.auth_token
    //if(!utils.Authenticate(auth_token)){

      //  console.log("Authentication failed...");

        // next(new Error('Authentication error'));
       // next(new Error("Authentication error"));
       // socket.disconnect();
   // }
   // else{

    next();

    //}

    // utils.handlePreConnect(socket, next);



});




io.on('connection', function (socket, callback) {



    console.log("New connection - "+socket.id);
    socket.join("twoosh");
    //socket.disconnect();
    //console.log("Disconnected...")




    socket.on('new_msg', function (data) {

    console.log("sending new msg..."+data);
    io.to('twoosh').emit('new_msg_client', data);

    });


});
