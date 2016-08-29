io = require('socket.io')(8001);


console.log("socket listening on 8001");
io.on('connection', function (socket) {


    console.log("New connection - "+socket.id);


  socket.on('get_online_count', function (data) {

    console.log("sending online count 99 to onlinecount");
    socket.emit('onlinecount', "99");

  });


});