//******************************** rF: ROBOT FACE DEFINITIONS ********************************************//
rF  = {};
    rF.currentEmotion = "default";
    rF.talkingState = false;
    rF.status = {};
    rF.center = new Point(480, 0);

    rF.mouth  = {};
        rF.mouth.points = 5;
        rF.mouth.width = 320;
        rF.mouth.startY = rF.center.y + 390;

    rF.nose = {};
        rF.nose = rF.center + new Point (0,250);
        rF.nose.width = 15;
        rF.nose.height = 20;
        rF.nose.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 30,
            strokeCap: 'round'
        };

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

    rF.eye = {}
        rF.eye.gap = 80;
        rF.eye.radius = 70;
        rF.eye.height = rF.center.y + 150;
        rF.eye.style = {
            circleStyle: {
                fillColor: new RgbColor(1, 1, 1),
                strokeColor: new GrayColor(0.8),
                strokeWidth: 5
        }};
        rF.eye.pupilStyle = {
            circleStyle: {
                fillColor: new RgbColor(0, 0, 0),
                strokeColor: new RgbColor(0.458 ,0.584 , 0.749),
                strokeWidth: 5
        }};

    rF.motion = {};
        rF.motion.on = false;
        rF.motion.step = 0;
        rF.motion.steptotal = 10;

//******************************** rF: ROBOT FACE DEFINITIONS END ****************************************//

//******************************** rF: ROBOT FACE COORDINATE INITIALISE *********************************//

// Initialise Status alerts
    rF.status.emotion = new PointText([50,50]);
        rF.status.emotion.paragraphStyle.justification = 'left';
        rF.status.emotion.characterStyle.fontSize = 20;
        rF.status.emotion.fillColor = 'black';
        rF.status.emotion.content = 'Not Started Emotions';
    rF.status.talking = new PointText([50,100]);
        rF.status.talking.paragraphStyle.justification = 'left';
        rF.status.talking.characterStyle.fontSize = 20;
        rF.status.talking.fillColor = 'black';
        rF.status.talking.content = 'Not Talking';
    rF.status.eyeData = new PointText([800,100]);
        rF.status.eyeData.paragraphStyle.justification = 'left';
        rF.status.eyeData.characterStyle.fontSize = 20;
        rF.status.eyeData.fillColor = 'black';
        rF.status.eyeData.content = 'No eye data';

        rF.mouth.startX = rF.center.x - (rF.mouth.width/2);
        rF.mouth.toplip = new Path();
        for (var i = 0; i <= rF.mouth.points; i++) {
            rF.mouth.toplip.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
        }

        rF.nose.obj = new Path();
            rF.nose.obj.add(new Point(rF.nose.x-rF.nose.width, rF.nose.y));
            rF.nose.obj.add(new Point(rF.nose.x-(rF.nose.width/5), rF.nose.y-rF.nose.height));
            rF.nose.obj.add(new Point(rF.nose.x+(rF.nose.width/5), rF.nose.y-rF.nose.height));
            rF.nose.obj.add(new Point(rF.nose.x+rF.nose.width, rF.nose.y));
        rF.nose.obj.style = rF.nose.style;

        rF.nose.obj.closed = true;
        rF.nose.obj.smooth();



        rF.eyebrow.leftobj = new Path();
            rF.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rF.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rF.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rF.eyebrow.leftobj.style = rF.eyebrow.style;
        rF.eyebrow.leftobj.smooth();
        rF.eyebrow.rightobj = new Path();
            rF.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rF.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rF.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rF.eyebrow.rightobj.style = rF.eyebrow.style;
        rF.eyebrow.rightobj.smooth();


        rF.mouth.toplip.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 30,
            strokeCap: 'round'
         };
        rF.mouth.toplip.smooth();


    rF.leftEye  = {};
        rF.leftEye.center  = new Point ([rF.center.x - rF.eye.gap,rF.eye.height]);
        rF.leftEye.socket = new Path.Circle(rF.leftEye.center, rF.eye.radius);
        rF.leftEye.socket.style = rF.eye.style.circleStyle;
        rF.leftEye.pupil = new Path.Circle(rF.leftEye.center, 10);
        rF.leftEye.pupil.style = rF.eye.pupilStyle.circleStyle;
        rF.leftEye.pupil.destination  = rF.leftEye.center;
    rF.rightEye  = {};
        rF.rightEye.center  = new Point ([rF.center.x + rF.eye.gap,rF.eye.height]);
        rF.rightEye.socket = new Path.Circle(rF.rightEye.center, rF.eye.radius);
        rF.rightEye.socket.style = rF.eye.style.circleStyle;
        rF.rightEye.pupil = new Path.Circle(rF.rightEye.center, 10);
        rF.rightEye.pupil.style = rF.eye.pupilStyle.circleStyle;
        rF.rightEye.pupil.destination  = rF.rightEye.center;

    rF.eyeUpdate  = function (leftEye, rightEye) {
        rF.leftEye.pupil.destination  = rF.leftEye.center + new Point ([leftEye,0]);
        rF.rightEye.pupil.destination  = rF.rightEye.center + new Point ([rightEye,0]);
        console.log(leftEye);
    };

    rF.selected = false;
//************************** rF: ROBOT FACE COORDINATE INITIALISE END ***********************************//



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
            rEmotions.default.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rEmotions.default.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rEmotions.default.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));
        rEmotions.default.eyebrow.rightobj = new Path();
            rEmotions.default.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth, rF.eyebrow.faceheight));
            rEmotions.default.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY/2)));
            rEmotions.default.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)));



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
            rEmotions.happy.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)));
            rEmotions.happy.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.happy.eyebrow.leftobj.add(new Point((rF.center.x-rF.eyebrow.facewidth)+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-10));
        rEmotions.happy.eyebrow.rightobj = new Path();
            rEmotions.happy.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)));
            rEmotions.happy.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.happy.eyebrow.rightobj.add(new Point((rF.center.x+rF.eyebrow.facewidth)-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-10));


//***** joyous ***** //
    rEmotions.joyous = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.joyous.mouth.toplip = new Path();
            rEmotions.joyous.mouth.toplip.incr = 20;
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 0*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.joyous.mouth.toplip.incr*5)) );
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 0.9*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.joyous.mouth.toplip.incr*1)) );
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 1.8*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.joyous.mouth.toplip.incr*5)) );
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 3.2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.joyous.mouth.toplip.incr*5)) );
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 4.1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rEmotions.joyous.mouth.toplip.incr*1)) );
            rEmotions.joyous.mouth.toplip.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rEmotions.joyous.mouth.toplip.incr*5)) );
        rEmotions.joyous.eyebrow.leftobj = new Path();
            rEmotions.joyous.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.joyous.eyebrow.leftobj.add(new Point(rF.center.x-rF.eyebrow.facewidth+(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-20));
            rEmotions.joyous.eyebrow.leftobj.add(new Point((rF.center.x-rF.eyebrow.facewidth)+(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-15));
        rEmotions.joyous.eyebrow.rightobj = new Path();
            rEmotions.joyous.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth, rF.eyebrow.faceheight-(rF.eyebrow.highY)-5));
            rEmotions.joyous.eyebrow.rightobj.add(new Point(rF.center.x+rF.eyebrow.facewidth-(rF.eyebrow.width/2), rF.eyebrow.faceheight-(rF.eyebrow.highY)-20));
            rEmotions.joyous.eyebrow.rightobj.add(new Point((rF.center.x+rF.eyebrow.facewidth)-(rF.eyebrow.width), rF.eyebrow.faceheight-(rF.eyebrow.highY)-15));
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
//*** ANTICIPATION *//
    rEmotions.anticipation = {
        mouth: {},
        eyebrow: {}
    };
        rEmotions.anticipation.mouth.toplip = new Path();
        rEmotions.anticipation.mouth.toplip.incr = 10;
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX, rF.mouth.startY-rEmotions.anticipation.mouth.toplip.incr) );
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX + 1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+5) );
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX + 2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+5) );
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX + 3*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+5) );
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX + 4*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+5) );
                rEmotions.anticipation.mouth.toplip.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-rEmotions.anticipation.mouth.toplip.incr) );
        rEmotions.anticipation.eyebrow.leftobj = new Path();
            rEmotions.anticipation.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[0].point + [0,0]));
            rEmotions.anticipation.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[1].point + [0,5]));
            rEmotions.anticipation.eyebrow.leftobj.add(new Point(rEmotions.default.eyebrow.leftobj.segments[2].point + [0,0]));
        rEmotions.anticipation.eyebrow.rightobj = new Path();
            rEmotions.anticipation.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[0].point + [0,-5]));
            rEmotions.anticipation.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[1].point + [0,-20]));
            rEmotions.anticipation.eyebrow.rightobj.add(new Point(rEmotions.default.eyebrow.rightobj.segments[2].point + [0,5]));
//************************* rEmotions: EMOTION COORDINATE DEFINITIONS END ********************************//



//************************* CALCULATOR FOR EYE MOVEMENT START ********************************************//
calc = {};
calc.EyeMovement = function (distance, angleDeg, eyegap, eyerad){
	var pi = Math.PI;
	var bigTri = {};
	var leftEyeTri = {};
	var rightEyeTri = {};
    var mult = 7;
	// convert angle to radians
	var angle = angleDeg*(pi/180);

	// big triangle calculations
	bigTri.hyp = distance;
	bigTri.opp = bigTri.hyp * Math.sin(angle);

	bigTri.adj = bigTri.hyp * Math.cos(angle);

	// left eye triangle calculations
	leftEyeTri.opp = bigTri.opp - eyegap;
	leftEyeTri.adj = bigTri.adj;
	leftEyeTri.angle = Math.atan(leftEyeTri.opp/leftEyeTri.adj);
	leftEyeTri.move = eyerad * Math.cos(leftEyeTri.angle);

	// right eye triangle calculations
	rightEyeTri.opp = bigTri.opp + eyegap;
	rightEyeTri.adj = bigTri.adj;
	rightEyeTri.angle = Math.atan(rightEyeTri.opp/rightEyeTri.adj);
	rightEyeTri.move = eyerad * Math.cos(rightEyeTri.angle);
    //mock
    leftEyeTri.move = leftEyeTri.move*3.779527564*mult;
    rightEyeTri.move = rightEyeTri.move*3.779527564*mult;

    //console.log(leftEyeTri.move);
   // console.log(rightEyeTri.move);

	return({"lefteye" : leftEyeTri.move, "righteye" : rightEyeTri.move});
}
//************************* CALCULATOR FOR EYE MOVEMENT START END ****************************************//









    tData = {};
    tData.start = new Point(rF.mouth.startX, rF.mouth.startY);
    tData.center = new Point(rF.mouth.startX+(rF.mouth.width/2), rF.mouth.startY);

var talkGestures = new Array();
    talkGestures[0] = new Array(new Point(tData.center+[-10,20]), new Point(tData.center+[-80,-10]),new Point(tData.center+[-30,-30]),new Point(tData.center+[+30,-30]),new Point(tData.center+[+80,-10]), new Point(tData.center+[+10,20]));
    talkGestures[1] = new Array(new Point(tData.center+[-10,10]), new Point(tData.center+[-80,-10]),new Point(tData.center+[-30,-15]),new Point(tData.center+[+30,-15]),new Point(tData.center+[+80,-10]), new Point(tData.center+[+10,10]));
    talkGestures[2] = new Array(new Point(tData.center+[-10,20]), new Point(tData.center+[-75,-10]),new Point(tData.center+[-40,-30]),new Point(tData.center+[+40,-30]),new Point(tData.center+[+75,-10]), new Point(tData.center+[+10,20]));

    tData.bubble = new Path();
        tData.bubble.add(new Point([180,330]));
        tData.bubble.add(new Point([40,330]));
        tData.bubble.add(new Point([10,300]));
        tData.bubble.add(new Point([10,200]));
        tData.bubble.add(new Point([40,170]));
        tData.bubble.add(new Point([240,170]));
        tData.bubble.add(new Point([270,200]));
        tData.bubble.add(new Point([270,300]));
        tData.bubble.add(new Point([230,330]));
        tData.bubble.smooth();
        tData.bubble.add(new Point([330,370])); //speech point
        tData.bubble.closed = true;
        tData.bubble.style = {
            strokeColor: new GrayColor(0.8),
            strokeWidth: 9,
            strokeCap: 'round'
        }
        tData.bubble.talkstyle = {
                fontSize: 20,
                fillColor: 'black'
            };
        tData.bubble.talk = new PointText(new Point(30, 210));
        tData.bubble.talk.content = "Hello guys!";
        tData.bubble.talk.characterStyle = tData.bubble.talkstyle;
        tData.bubble.talk.visible = false;
        tData.bubble.visible = false;
        tData.bubble.talk2 = new PointText(new Point(30, 240));
        tData.bubble.talk2.characterStyle = tData.bubble.talkstyle;
        tData.bubble.talk2.visible = false;
        tData.bubble.talk3 = new PointText(new Point(30, 270));
        tData.bubble.talk3.characterStyle = tData.bubble.talkstyle;
        tData.bubble.talk3.visible = false;
        tData.bubble.talk4 = new PointText(new Point(30, 300));
        tData.bubble.talk4.characterStyle = tData.bubble.talkstyle;
        tData.bubble.talk4.visible = false;

var center = new Point(480, 80);



//Selections for debug
rF.debug =  function(status) {
    rF.mouth.toplip.selected = status;
    //rF.rightEye.socket.segments[1].selected = true;
    //rF.rightEye.socket.segments[2].selected = true;
    rF.rightEye.socket.selected = status;
    rF.leftEye.socket.selected = status;
    rF.nose.obj.selected = status;
    rF.eyebrow.leftobj.selected = status;
    rF.eyebrow.rightobj.selected = status;



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
    
    path.visible = status;
    path2.visible = status;
    path3.visible = status;
    path4.visible = status;
    path5.visible = status;

    rF.status.emotion.visible = status;
    rF.status.eyeData.visible = status;
    rF.status.talking.visible = status;
};


rF.debug(false);






var destinationF = rF;
var timer = 0;

//************************* ANIMATION FRAME SECTION ******************************************************//
function onFrame(event) {
    timer++;

        switch(rF.currentEmotion){
            case "sad":
            case "s":
                destinationF = rEmotions.sad;
                //console.log("FACE:sad");
                 rF.status.emotion.content = "FACE:sad";
            break;
            case "happy":
            case "h":
                destinationF = rEmotions.happy;
                //console.log("FACE:happy");
                 rF.status.emotion.content = "FACE:happy";
            break;
            case "default":
            case "d":
                destinationF = rEmotions.default;
                //console.log("FACE:default");
                 rF.status.emotion.content = "FACE:default";
            break;
            case "confused":
            case "c":
                destinationF = rEmotions.confused;
                //console.log("FACE:confused");
                 rF.status.emotion.content = "FACE:confused";
            break;
            case "anticipation":
            case "a":
                destinationF = rEmotions.anticipation;
                //console.log("FACE:confused");
                 rF.status.emotion.content = "FACE:anticipation";
            break;
            case "joyous":
            case "j":
                destinationF = rEmotions.joyous;
                //console.log("FACE:confused");
                 rF.status.emotion.content = "FACE:joyous";
            break;
        }


//************************* MOUTH + TALKING ANIMATION **********************************************//
    if (!rF.motion.on || rF.motion.step != 0) {
        if (!rF.motion.on) {
        originFace = rF;
        destinationFace = destinationF;
        rF.motion.step = 0;
        rF.motion.on = true;
        }

        for (var i = 0; i <= rF.mouth.points; i++) {
            var segment = rF.mouth.toplip.segments[i];

            if (rF.talkingState) {
                rF.status.talking.content = 'Talking';
                tData.bubble.visible = true;
                tData.bubble.talk.visible = true;
                tData.bubble.talk2.visible = true;
                tData.bubble.talk3.visible = true;
                tData.bubble.talk4.visible = true;
                var vector = talkGestures[(Math.round(timer/10)%3)][i] - originFace.mouth.toplip.segments[i].point;
                var vectorB = vector/(rF.motion.steptotal/1.5);
            } else {
                rF.status.talking.content = 'Not Talking';
                tData.bubble.talk.visible = false;
                tData.bubble.talk2.visible = false;
                tData.bubble.talk3.visible = false;
                tData.bubble.talk4.visible = false;
                tData.bubble.visible = false;
                var vector = destinationFace.mouth.toplip.segments[i].point - originFace.mouth.toplip.segments[i].point;
                var vectorB = vector/rF.motion.steptotal;
            }
            segment.point = segment.point + vectorB;
        }
        rF.mouth.toplip.smooth();

        if (rF.motion.step == rF.motion.steptotal) {
            rF.motion.on = false;
            rF.motion.step = 0;
        }
        rF.motion.step++;
    }
//************************* MOUTH + TALKING ANIMATION END ******************************************//


//************************* ANIMATION EYEBROW START ************************************************//
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
            rightsegment.point = destinationFace.eyebrow.rightobj.segments[i].point;
        }
    }
    rF.eyebrow.leftobj.smooth();
    rF.eyebrow.rightobj.smooth();
//************************* ANIMATION EYEBROW END ***************************************************//


//************************* ANIMATION BLINK START ***************************************************//
    if (timer%500==1) {
            rF.leftEye.socket.scale(1, 0.2);
            rF.rightEye.socket.scale(1, 0.2);
    } else if(timer%500==3) {
            rF.leftEye.socket.scale(1, 5);
            rF.rightEye.socket.scale(1, 5);
    }
//************************* ANIMATION BLINK END *****************************************************//

//************************* ANIMATION PUPILS START **************************************************//
   var leftPupil = rF.leftEye.pupil;
        var leftPupilVector =   rF.leftEye.pupil.destination - rF.leftEye.pupil.position;
        if (leftPupilVector.length > 0.5) {
            var vectorA = leftPupilVector/7;
            leftPupil.position =   leftPupil.position + vectorA;
        } else {
            rF.leftEye.pupil.position =  rF.leftEye.pupil.destination;
        }

   var rightPupil = rF.rightEye.pupil;
        var rightPupilVector =   rF.rightEye.pupil.destination - rF.rightEye.pupil.position;
        if (rightPupilVector.length > 0.5) {
            var vectorA = rightPupilVector/7;
            rightPupil.position =   rightPupil.position + vectorA;
        } else {
            rF.rightEye.pupil.position =  rF.rightEye.pupil.destination;
        }


//************************* ANIMATION PUPILS END **************************************************//




}
//************************* ANIMATION FRAME SECTION END **************************************************//
