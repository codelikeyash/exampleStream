var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http, {
    cors: {
        origin: ['*']
    }
});

// socket connection
io.on('connection', (socket) => {
	console.log("A user connected!");
	// executes when a user sends a message
	socket.on('msg', (msg) => {
		console.log("message: ", msg);
		socket.broadcast.emit('msg', msg);
	});

});

const PORT = process.env.PORT || 8000;

// port to listen
http.listen(PORT, function(){
  console.log('listening on port: ', PORT);
});