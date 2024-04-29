objects = [];
status = "";

function preload(){
 video = createVideo("video.mp4")
}

function setup(){
canvas = createCanvas(500 , 400) ;
canvas.center();
video.hide();
}

function draw(){
image(video , 0, 0, 500, 400);
}