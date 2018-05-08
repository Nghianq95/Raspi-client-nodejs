//server.js
var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (data) {
    console.log('MSG', data);
    io.sockets.emit('server-send-data', data);
  });

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

app.get('/', (req, res)=>{
	res.render('trangchu.ejs');
});