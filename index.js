var express = require('express');
var ws = require('ws').Server;
var app = express();
var port = 3000;

app.listen(port, function(){
    console.log('Server started on port  ' + port);
})

app.use(express.static('public'));

var wss = new ws({port: 3200});

wss.on('connection', function(socket){
    console.log('A new client has arrived');

    socket.on('message', function(msg){
        
        wss.clients.forEach(function each(client){
            client.send(msg)
        })

    })
    
})