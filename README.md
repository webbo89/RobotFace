# Browser based Robot Face #

>For Imperial College 4th Year Human Centered Robotics course

## Made using Paper.JS and controlled by node (with socket.io + express)  ##

Node commandline accepts semicolon separated state changes for the face commands:

`emotion=happy;talking=false;`

![](https://raw.github.com/webbo89/RobotFace/master/robotface.jpg)

List of commands

- emotion/e=[sad, happy, joyous, default, anticipation, confused]
- talking=[true,false]
- debug=[true,false]
- message=[any string text]
- eyeData=x:y:z	