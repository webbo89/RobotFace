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

    rF.eyeSize = new Size(120, 120);
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
for (var i = 0; i <= rF.mouth.points; i++) {
    mouth.add(new Point(rF.mouth.startX + i*(rF.mouth.width/rF.mouth.points), rF.mouth.startY) );
}


//Selections for debug
if (rF.selected) {
    mouth.selected = true;
    //rF.rightEye.socket.segments[1].selected = true;
    //rF.rightEye.socket.segments[2].selected = true;
    rF.rightEye.socket.selected = true;
    rF.leftEye.socket.selected = true;
}
var a = new Point(500, 20);
var destination = a + (Point.random() * rF.eyeSize);
var b = new Point(340, 20);
var destination2 = b + (Point.random() * rF.eyeSize);

function onFrame(event) {
    // Loop through the segments of the path:
    for (var i = 0; i <= amount; i++) {
        var segment = mouth.segments[i];

        // A cylic value between -1 and 1
        var sinus = Math.sin(event.time * 3 + i);

        // Change the y position of the segment point:
        segment.point.y = sinus * height + rF.mouth.startY;
    }
    // Uncomment the following line and run the script again
    // to smooth the path:
    mouth.smooth();




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

