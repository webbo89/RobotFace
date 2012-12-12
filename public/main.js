console.log(window.location.href);
console.log(document.domain);
console.log(location.h);

var socket = io.connect(window.location.href);
var face = io.connect(window.location.href+"face");

socket.on('connect', function() {
    console.log('Connected');
	rF.activeBubble = false;
    rF.talkingState = false;

});

socket.on('message', function(data) {
    console.log(data);
});

socket.on('disconnect', function() {
    console.log('Disconnected');
	
	rF.activeBubble = true;

	var message = "I've lost connection to my body";
    var str = message.replace(/(\r\n|\n|\r)/gm,"=");
    console.log("message:",message);
    var brk = "=";
    var width = 16;
    var cut = false;
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
    str =  str.match( RegExp(regex, 'g') ).join( brk );
    var lines = str.split("=");
    tData.bubble.talk.content = lines[0]||"";
    tData.bubble.talk2.content = lines[1]||"";
    tData.bubble.talk3.content = lines[2]||"";
    tData.bubble.talk4.content = lines[3]||"";
    rF.talkingState = true;


});





face.on('emotionchange', function (data) {
    console.log(data);
    rF.currentEmotion = data.emotion.replace(/(\r\n|\n|\r)/gm,"");
});

face.on('talking', function (data) {
    console.log(data);
    if (data.talking.replace(/(\r\n|\n|\r)/gm,"")=="true") {
        rF.talkingState = true;
    } else {
        rF.talkingState = false;
    }
});

face.on('eyeUpdate', function (data) {
    console.log(data.eyeData);
    var eyeData = data.eyeData.replace(/(\r\n|\n|\r)/gm,"").split(":");
    rF.status.eyeData.content =  "x:"+eyeData[0]+" y:"+eyeData[1]+" z:"+eyeData[2];

    var result = calc.EyeMovement(eyeData[0],eyeData[1],eyeData[2]);
    rF.eyeUpdate(result);
});

face.on('debug', function (data) {
    console.log(data);
    if (data.debug.replace(/(\r\n|\n|\r)/gm,"")=="true") {
        rF.debug(true);
    } else {
        rF.debug(false);
    }
});

face.on('message', function (data) {
    console.log(data);
    //PaperJS doesn't seem to allow multiline textboxes so pretty terrible hack:
    var str = data.message.replace(/(\r\n|\n|\r)/gm,"=");
    console.log("message:",str);
	if (str == "") {
		rF.activeBubble = false;
	} else {
		rF.activeBubble = true;
	}
    var brk = "=";
    var width = 16;
    var cut = false;
    var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
    str =  str.match( RegExp(regex, 'g') ).join( brk );
    var lines = str.split("=");
    tData.bubble.talk.content = lines[0]||"";
    tData.bubble.talk2.content = lines[1]||"";
    tData.bubble.talk3.content = lines[2]||"";
    tData.bubble.talk4.content = lines[3]||"";
});

