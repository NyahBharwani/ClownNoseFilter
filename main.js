var canvas;
var video;
var noseX=0
var noseY=0
var headX=0
var headY=0

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is loaded")
}

function gotPoses(results){
    console.long(results)
    if(results.length > 0){
        console.log("x = "+results[0].pose.nose.x)
        noseX=results[0].pose.nose.x;
        console.log("y = "+results[0].pose.nose.y)
        noseY=results[0].pose.nose.y
    }
}

function draw(){
    image(video,0,0,400,400);
    fill(255,0,0)
    circle(noseX-120,noseY-40,20,20)
}

function take_snapshot(){
    save("MyName.jpg");
}