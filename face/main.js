var socket = io.connect("http://localhost:3000");
var face = io.connect("http://localhost:3000/face");

socket.on('connect', function() {
    console.log('Connected');
});

socket.on('message', function(data) {
    console.log(data);
});

face.on('emotionchange', function (data) {
    console.log(data);
    rF.currentEmotion = data.emotion.replace(/(\r\n|\n|\r)/gm,"");
    //console.log(data);
});

face.on('talking', function (data) {
    console.log(data);

    if (data.talking.replace(/(\r\n|\n|\r)/gm,"")=="true") {
        rF.talkingState = true;
    } else {
        rF.talkingState = false;
    }
    //console.log(data);
});

face.on('message', function (data) {
    console.log(data);
    //PaperJS doesnt seem to allow multiline textboxes so pretty terrible hack:
    var str = data.message.replace(/(\r\n|\n|\r)/gm,"=");
    console.log(str);
    var brk = "=";
    var width = 16;
    var cut = false;
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
    str =  str.match( RegExp(regex, 'g') ).join( brk );
    var lines = str.split("=");
    tData.bubble.talk.content = lines[0];
    tData.bubble.talk2.content = lines[1];
    tData.bubble.talk3.content = lines[2];
    tData.bubble.talk4.content = lines[3];
});

/*
<script>
  var socket = io.connect('http://localhost:3000/face');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
*/
