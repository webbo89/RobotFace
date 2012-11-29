// The amount of segment points we want to create:
var amount = 5;

// The maximum height of the wave:
var height = 60;

// Create a new path and style it:
var mouth = new Path();
mouth.style = {
    strokeColor: new GrayColor(0.8),
    strokeWidth: 30,
    strokeCap: 'round'
};

//******************************** rF: ROBOT FACE DEFINITIONS ********************************************//
rF  = {};
    rF.mouth  = {};
        rF.mouth.points = 5;
        rF.mouth.width = 320;
        rF.mouth.startY = 390;
        rF.mouth.startX = 320;
        rF.mouth.toplip = new Path();
        for (var i = 0; i <= rF.mouth.points; i++) {
            rF.mouth.toplip.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
        }
        rF.motion = {};
        rF.motion.on = false;
        rF.motion.step = 0;
        rF.motion.steptotal = 10;

        rF.nose = {};
        rF.nose.topX = 480;
        rF.nose.topY = 250;
        rF.nose.width = 15;
        rF.nose.height = 20;
        rF.nose.obj = new Path();
            rF.nose.obj.add(new Point(rF.nose.topX-rF.nose.width, rF.nose.topY));
            rF.nose.obj.add(new Point(rF.nose.topX-(rF.nose.width/5), rF.nose.topY-rF.nose.height));
            rF.nose.obj.add(new Point(rF.nose.topX+(rF.nose.width/5), rF.nose.topY-rF.nose.height));
            rF.nose.obj.add(new Point(rF.nose.topX+rF.nose.width, rF.nose.topY));
        rF.nose.obj.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 30,
            strokeCap: 'round'
         };

        rF.nose.obj.closed = true;
        rF.nose.obj.smooth();

        rF.eyebrow = {};
        rF.eyebrow.lowY = 20;
        rF.eyebrow.highY = 10;
        rF.eyebrow.width = 100;
        rF.eyebrow.facewidth = 150; //Half width
        rF.eyebrow.faceheight = 70;
        rF.eyebrow.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 30,
            strokeCap: 'round'
         };
        rF.eyebrow.leftobj = new Path();
            rF.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rF.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rF.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rF.eyebrow.leftobj.style = rF.eyebrow.style;
        rF.eyebrow.leftobj.smooth();
        rF.eyebrow.rightobj = new Path();
            rF.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rF.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rF.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rF.eyebrow.rightobj.style = rF.eyebrow.style;
        rF.eyebrow.rightobj.smooth();


        rF.mouth.toplip.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 30,
            strokeCap: 'round'
         };
        rF.mouth.toplip.smooth();

    rF.eyeSize = new Size(100, 100);
    rF.eyeStyle = {
        circleStyle: {
            fillColor: new RgbColor(1, 1, 1),
            strokeColor: new GrayColor(0.8),
            strokeWidth: 5
        }
    };
    rF.pupilStyle = {
        circleStyle: {
            fillColor: new RgbColor(0, 0, 0),
            strokeColor: new RgbColor(0 ,0 , 1),
            strokeWidth: 5
        }
    };

    rF.leftEye  = {};
        rF.leftEye.socket = new Path.Circle([400,150], 70);
        rF.leftEye.socket.style = rF.eyeStyle.circleStyle;
        rF.leftEye.pupil = new Path.Circle([400,150], 10);
        rF.leftEye.pupil.style = rF.pupilStyle.circleStyle;

    rF.rightEye  = {};
        rF.rightEye.socket = new Path.Circle([560,150], 70);
        rF.rightEye.socket.style = rF.eyeStyle.circleStyle;
        rF.rightEye.pupil = new Path.Circle([560,150], 10);
        rF.rightEye.pupil.style = rF.pupilStyle.circleStyle;

    rF.selected = false;

//******************************** rF: ROBOT FACE DEFINITIONS END ****************************************//

//************************* rEmotions: EMOTION COORDINATE DEFINITIONS ************************************//
rEmotions  = {};
//***** NORMAL **** //
    rEmotions.default = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.default.mouth.toplip = new Path();
        var arrayDefSmile = [0,5,10,10,5,0];
            for (var i = 0; i <= rF.mouth.points; i++) {
                rEmotions.default.mouth.toplip.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+arrayDefSmile[i]) );
            }

        rEmotions.default.eyebrow.leftobj = new Path();
            rEmotions.default.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rEmotions.default.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rEmotions.default.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rEmotions.default.eyebrow.rightobj = new Path();
            rEmotions.default.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rEmotions.default.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rEmotions.default.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));



//***** HAPPY ***** //
    rEmotions.happy = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.happy.mouth.toplip = new Path();
            rEmotions.happy.mouth.toplip.incr = 10;
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 0*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.happy.mouth.toplip.incr*5)) );
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 0.9*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.happy.mouth.toplip.incr*1)) );
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 1.8*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.happy.mouth.toplip.incr*5)) );
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 3.2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.happy.mouth.toplip.incr*5)) );
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 4.1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.happy.mouth.toplip.incr*1)) );
            rEmotions.happy.mouth.toplip.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.happy.mouth.toplip.incr*5)) );
        rEmotions.happy.eyebrow.leftobj = new Path();
            rEmotions.happy.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)));
            rEmotions.happy.eyebrow.leftobj.add(new Point(480-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.happy.eyebrow.leftobj.add(new Point((480-rF.eyebrow.facewidth)+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-10));
        rEmotions.happy.eyebrow.rightobj = new Path();
            rEmotions.happy.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)));
            rEmotions.happy.eyebrow.rightobj.add(new Point(480+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.happy.eyebrow.rightobj.add(new Point((480+rF.eyebrow.facewidth)-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-10));

//***** SAD ******* //
    rEmotions.sad = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.sad.mouth.toplip = new Path();
            rEmotions.sad.mouth.toplip.incr = 10;
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + 0*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.sad.mouth.toplip.incr*5)) );
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + .9*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + 1.8*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.sad.mouth.toplip.incr*5)) );
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + 3.2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.sad.mouth.toplip.incr*5)) );
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + 4.1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
            rEmotions.sad.mouth.toplip.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.sad.mouth.toplip.incr*5)) );
        rEmotions.sad.eyebrow.leftobj = new Path();
            rEmotions.sad.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[0].point + [0,5]));
            rEmotions.sad.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[1].point + [0,10]));
            rEmotions.sad.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[2].point + [0,5]));
        rEmotions.sad.eyebrow.rightobj = new Path();
            rEmotions.sad.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[0].point + [0,5]));
            rEmotions.sad.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[1].point + [0,10]));
            rEmotions.sad.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[2].point + [0,5]));
//*** CONFUSED **** //
    rEmotions.confused = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.confused.mouth.toplip = new Path();
        rEmotions.confused.mouth.toplip.incr = 20;
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX, rF.mouth.startY) );
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX + 1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+rEmotions.confused.mouth.toplip.incr) );
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX + 2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+rEmotions.confused.mouth.toplip.incr) );
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX + 3*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-rEmotions.confused.mouth.toplip.incr) );
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX + 4*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-rEmotions.confused.mouth.toplip.incr) );
                rEmotions.confused.mouth.toplip.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
        rEmotions.confused.eyebrow.leftobj = new Path();
            rEmotions.confused.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[0].point + [0,5]));
            rEmotions.confused.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[1].point + [0,10]));
            rEmotions.confused.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[2].point + [0,5]));
        rEmotions.confused.eyebrow.rightobj = new Path();
            rEmotions.confused.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[0].point + [0,-5]));
            rEmotions.confused.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[1].point + [0,-10]));
            rEmotions.confused.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[2].point + [0,5]));
//************************* rEmotions: EMOTION COORDINATE DEFINITIONS END ********************************//

    tData = {};
    tData.start = new Point(rF.mouth.startX, rF.mouth.startY);
    tData.center = new Point(rF.mouth.startX+(rF.mouth.width/2), rF.mouth.startY);

var talkGestures = new Array();
    talkGestures[0] = new Array(new Point(tData.center+[-10,20]), new Point(tData.center+[-80,-10]),new Point(tData.center+[-30,-30]),new Point(tData.center+[+30,-30]),new Point(tData.center+[+80,-10]), new Point(tData.center+[+10,20]));
    talkGestures[1] = new Array(new Point(tData.center+[-10,10]), new Point(tData.center+[-80,-10]),new Point(tData.center+[-30,-15]),new Point(tData.center+[+30,-15]),new Point(tData.center+[+80,-10]), new Point(tData.center+[+10,10]));
    talkGestures[2] = new Array(new Point(tData.center+[-10,20]), new Point(tData.center+[-75,-10]),new Point(tData.center+[-40,-30]),new Point(tData.center+[+40,-30]),new Point(tData.center+[+75,-10]), new Point(tData.center+[+10,20]));




var center = new Point(480, 80);

// Intitialise



//Selections for debug
if (rF.selected) {
    rF.mouth.toplip.selected = true;
    //rF.rightEye.socket.segments[1].selected = true;
    //rF.rightEye.socket.segments[2].selected = true;
    rF.rightEye.socket.selected = true;
    rF.leftEye.socket.selected = true;
    rF.nose.obj.selected = true;
    rF.eyebrow.leftobj.selected = true;
    rF.eyebrow.rightobj.selected = true;

    var path = new Path.Line([480,0], [480,700]);
    path.strokeColor = 'black';
    var path2 = new Path.Line([330,0], [330,700]);
    path2.strokeColor = 'black';
    var path3 = new Path.Line([630,0], [630,700]);
    path3.strokeColor = 'black';
    var path4 = new Path.Line([430,0], [430,700]);
    path4.strokeColor = 'black';
    var path5 = new Path.Line([530,0], [530,700]);
    path5.strokeColor = 'black';
}

//*** STatUS Output info **//
var text = new PointText([50,50]);
text.paragraphStyle.justification = 'left';
text.characterStyle.fontSize = 20;
text.fillColor = 'black';
text.content = 'Not Started';
var text2 = new PointText([50,100]);
text2.paragraphStyle.justification = 'left';
text2.characterStyle.fontSize = 20;
text2.fillColor = 'black';
text2.content = 'Not Talking';



var originF = rF;
var destinationF = rF;
var timer = 0;
var talking = false;

//************************* ANIMATION FRAME SECTION ******************************************************//
function onFrame(event) {
    timer++;
    if (timer%70==0) {
        var rand = Math.round(Math.random()*4);
        switch(rand){
            case 0:
                destinationF = rEmotions.sad;
                //console.log("FACE:sad");
                 text.content = "FACE:sad";
            break;
            case 1:
                destinationF = rEmotions.happy;
                //console.log("FACE:happy");
                 text.content = "FACE:happy";
            break;
            case 2:
                destinationF = rEmotions.default;
                //console.log("FACE:default");
                 text.content = "FACE:default";
            break;
            case 3:
                destinationF = rEmotions.confused;
                //console.log("FACE:confused");
                 text.content = "FACE:confused";
            break;
        }

    }

    if (Math.round(timer/400)%2==0) {
        talking = true;
        text2.content = 'Talking';
    } else {
        talking = false;
        text2.content = 'Not Talking';
    }



    if (!rF.motion.on || rF.motion.step != 0) {
        if (!rF.motion.on) {
            //console.log("setting up transition");
        originFace = rF;
        destinationFace = destinationF;
        rF.motion.step = 0;
        rF.motion.on = true;
        }


        for (var i = 0; i <= rF.mouth.points; i++) {
            var segment = rF.mouth.toplip.segments[i];

            if (talking) {
                //console.log(i+":"+talkGestures[][i]);
                //console.log(talkGestures);
                //
                var vector = talkGestures[(Math.round(timer/10)%3)][i] - originFace.mouth.toplip.segments[i].point;
                var vectorB = vector/(rF.motion.steptotal/1.5);
            } else {
                var vector = destinationFace.mouth.toplip.segments[i].point - originFace.mouth.toplip.segments[i].point;
                var vectorB = vector/rF.motion.steptotal;
            }

            segment.point = segment.point + vectorB;
        }
        rF.mouth.toplip.smooth();

        for (var i = 0; i <= 2; i++) {
            var leftsegment = rF.eyebrow.leftobj.segments[i];
            var leftvector = destinationFace.eyebrow.leftobj.segments[i].point - originFace.eyebrow.leftobj.segments[i].point;
            if (leftvector.length > 0.5) {
                var vectorA = leftvector/rF.motion.steptotal;
                leftsegment.point = leftsegment.point + vectorA;
            } else {
                leftsegment.point = destinationFace.eyebrow.leftobj.segments[i].point;
            }

            var rightsegment = rF.eyebrow.rightobj.segments[i];
            var rightvector = destinationFace.eyebrow.rightobj.segments[i].point - originFace.eyebrow.rightobj.segments[i].point;
            if (rightvector.length > 0.5) {
            var vectorB = rightvector/rF.motion.steptotal;
            rightsegment.point = rightsegment.point + vectorB;
            } else {
                //console.log("occured on item"+i+"")
                rightsegment.point = destinationFace.eyebrow.rightobj.segments[i].point;
            }

            //console.log(rightsegment.point);
            //console.log(leftsegment.point);


        }
        rF.eyebrow.leftobj.smooth();
        rF.eyebrow.rightobj.smooth();

     //       //console.log( rF.motion.step);
     //       //console.log( rF.motion.on);

        if (rF.motion.step == rF.motion.steptotal) {
     //       //console.log("last step");

            rF.motion.on = false;
            rF.motion.step = 0;
        }
        rF.motion.step++;
    }



}
//************************* ANIMATION FRAME SECTION END **************************************************//
