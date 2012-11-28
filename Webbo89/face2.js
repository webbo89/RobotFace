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

rF  = {};
    rF.mouth  = {};
        rF.mouth.points = 5;
        rF.mouth.width = 320;
        rF.mouth.startY = 320;
        rF.mouth.startX = 320;
        rF.mouth.toplip = new Path();
        for (var i = 0; i <= rF.mouth.points; i++) {
            rF.mouth.toplip.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
        }
        rF.motion = {};
        rF.motion.on = false;
        rF.motion.step = 0;
        rF.motion.steptotal = 10;

        rF.mouth.toplip.sadface = new Path();
            rF.mouth.toplip.sadface.incr = 10;
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + 0*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.sadface.incr*5)) );
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + .9*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + 1.8*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rF.mouth.toplip.sadface.incr*5)) );
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + 3.2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rF.mouth.toplip.sadface.incr*5)) );
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + 4.1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
            rF.mouth.toplip.sadface.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.sadface.incr*5)) );

        rF.mouth.toplip.happyface = new Path();
            rF.mouth.toplip.happyface.incr = 10;
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 0*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rF.mouth.toplip.happyface.incr*5)) );
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 0.9*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.happyface.incr*1)) );
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 1.8*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.happyface.incr*5)) );
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 3.2*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.happyface.incr*5)) );
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 4.1*(rF.mouth.width/rF.mouth.points), rF.mouth.startY+(rF.mouth.toplip.happyface.incr*1)) );
            rF.mouth.toplip.happyface.add(new Point(rF.mouth.startX + 5*(rF.mouth.width/rF.mouth.points), rF.mouth.startY-(rF.mouth.toplip.happyface.incr*5)) );

        rF.mouth.toplip.straightface = new Path();
            for (var i = 0; i <= rF.mouth.points; i++) {
                rF.mouth.toplip.straightface.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
            }

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
        rF.leftEye.socket = new Path.Circle([400,80], 60);
        rF.leftEye.socket.style = rF.eyeStyle.circleStyle;
        rF.leftEye.pupil = new Path.Circle([400,80], 10);
        rF.leftEye.pupil.style = rF.pupilStyle.circleStyle;

    rF.rightEye  = {};
        rF.rightEye.socket = new Path.Circle([560,80], 60);
        rF.rightEye.socket.style = rF.eyeStyle.circleStyle;
        rF.rightEye.pupil = new Path.Circle([560,80], 10);
        rF.rightEye.pupil.style = rF.pupilStyle.circleStyle;

    rF.selected = true;


var center = new Point(480, 80);

// Intitialise



//Selections for debug
if (rF.selected) {
    rF.mouth.toplip.selected = true;
    //rF.rightEye.socket.segments[1].selected = true;
    //rF.rightEye.socket.segments[2].selected = true;
    rF.rightEye.socket.selected = true;
    rF.leftEye.socket.selected = true;
}
var a = new Point(510, 30);
var destination = a + (Point.random() * rF.eyeSize);
var b = new Point(350, 30);
var destination2 = b + (Point.random() * rF.eyeSize);
var originF = rF.mouth.toplip;
var destinationF = rF.mouth.toplip.happyface;
var timer = 0;


function onFrame(event) {
    timer++;
    // Loop through the segments of the path:
   // for (var i = 0; i <= amount; i++) {
      //  var segment = rF.mouth.toplip.segments[i];

        // A cylic value between -1 and 1
    //    var sinus = Math.sin(event.time * 3 + i);

        // Change the y position of the segment point:
       // segment.point.y = rF.mouth.toplip.happyface.segments[i].point.y;
   // }
    //rF.mouth.toplip.smooth();
    // Uncomment the following line and run the script again
    // to smooth the path:


 //   console.log(timer);
    if (timer%70==0) {
        var rand = Math.round(Math.random()*3);
        switch(rand){
            case 0:
                destinationF = rF.mouth.toplip.sadface;
                console.log("sadface");
            break;
            case 1:
                destinationF = rF.mouth.toplip.happyface;
                console.log("happyface");
            break;
            case 2:
                destinationF = rF.mouth.toplip.straightface;
                console.log("happyface");
            break;
        }

    }

    if (!rF.motion.on || rF.motion.step != 0) {
        if (!rF.motion.on) {
        originFace = rF.mouth.toplip;
        destinationFace = destinationF;
        rF.motion.step = 0;
        rF.motion.on = true;
        }

        for (var i = 0; i <= rF.mouth.points; i++) {

            var segment = rF.mouth.toplip.segments[i];
            var vector = destinationFace.segments[i].point - originFace.segments[i].point;


            //  console.log("V1:"+vector);
            var vectorB = vector/rF.motion.steptotal;
          //    console.log("V2:"+vectorB);

            // Change the y position of the segment point:
            segment.point = segment.point + vectorB;
        }
        rF.motion.step++;
        if (rF.motion.step == rF.motion.steptotal) {
            rF.motion.on = false;
            rF.motion.step = 0;
        }
        rF.mouth.toplip.smooth();

    }


    var vector = destination - rF.rightEye.pupil.position;
    var vector2 = destination2 - rF.leftEye.pupil.position;

    // We add 1/30th of the vector to the position property
    // of the text item, to move it in the direction of the
    // destination point:
    rF.rightEye.pupil.position += vector / 30;
    rF.leftEye.pupil.position += vector2 / 30;
    if (vector.length < 2) {
        destination = a + (Point.random() * rF.eyeSize);
    }

    if (vector2.length < 2) {
        destination2 = b + (Point.random() * rF.eyeSize);
    }




}

