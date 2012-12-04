var io = require('socket.io');
var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

io.set('log level', 0);

app.configure(function(){
    app.use(express.static(__dirname + "\\..\\" + 'public'));
});
server.listen(3000);

io.sockets.on('connection', function (socket) {
});

var face = io.of('/face').on('connection', function(socket) {});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (CMDinsert) {
    CMDinsert = CMDinsert.replace(/(\r\n|\n|\r)/gm,"");
    var commands = CMDinsert.split(";");

    //console.log(splitResult);
        console.log(commands);

    for(i = 0; i < commands.length; i++) {
            var command = commands[i].split("=");
        console.log(command);

        switch(command[0].replace(/^\s\s*/, '').replace(/\s\s*$/, '')){
                case "emotion":
                case "e":
                        face.emit('emotionchange', {emotion: command[1]})
                    console.log("emotion sent");
                break;
                case "eyeData":
                case "eyedata":
                case "ed":
                        face.emit('eyeUpdate', {eyeData: command[1]})
                    console.log("emotion sent");
                break;
                case "talking":
                case "t":
                        face.emit('talking', {talking: command[1]})
                    console.log("talking sent");
                break;
                case "message":
                case "m":
                        face.emit('message', {message: command[1]})
                    console.log("message sent");
                break;
                case "debug":
                case "d":
                        face.emit('debug', {debug: command[1]})
                    console.log("debug state sent");
                break;
                case "test":
                    var speed = command[1] || 1000;
                    console.log("Testing Sending Commands + Face");
                    face.emit('emotionchange', {emotion: "default"});
                    face.emit('talking', {talking: "false"})
                    face.emit('debug', {debug: "true"})
                    console.log("Sent emotion:default for 3 seconds");

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "happy"});
                        face.emit('eyeUpdate', {eyeData: "20:0:0"})
                    console.log("Sent emotion:happy for 3 seconds");
                        },2*speed);

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "sad"});
                        face.emit('eyeUpdate', {eyeData: "500:500:50"})
                    console.log("Sent emotion:sad for 3 seconds");
                        },4*speed);

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "joyous"});
                        face.emit('eyeUpdate', {eyeData: "500:100:50"})
                    console.log("Sent emotion:joyous for 3 seconds");
                        },6*speed);

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "anticipation"});
                        face.emit('eyeUpdate', {eyeData: "500:0:200"})
                    console.log("Sent emotion:anticipation for 3 seconds");
                        },8*speed);

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "confused"});
                        face.emit('eyeUpdate', {eyeData: "500:0:-100"})
                    console.log("Sent emotion:confused for 3 seconds");
                        },1*speed);

                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "default"});
                        face.emit('eyeUpdate', {eyeData: "500:-500:100"})
                    console.log("Sent emotion:default for 3 seconds");
                        },12*speed);

                    setTimeout(function() {
                        face.emit('message', {message: "hello! I'm in test mode..."})
                        face.emit('eyeUpdate', {eyeData: "500:0:0"})
                        face.emit('talking', {talking: "true"})
                    console.log("Sent talking for 3 seconds");
                        },14*speed);
                    setTimeout(function() {
                        face.emit('message', {message: "I can raise my eyebrows"})
                        face.emit('emotionchange', {emotion: "happy"});
                        face.emit('eyeUpdate', {eyeData: "500:0:0"})
                        face.emit('talking', {talking: "true"})
                    console.log("Sent more talking for 3 seconds");
                        },16*speed);
                    setTimeout(function() {
                        face.emit('emotionchange', {emotion: "default"});
                        face.emit('talking', {talking: "false"})
                        face.emit('debug', {debug: "false"})
                    console.log("Sent emotion:default for 3 seconds");

                        },18*speed);

                break;
           }
    }
    try {
        } catch (err) {
            console.log('error',err);
            io.sockets.emit('message', { message: chunk });
        }
});
