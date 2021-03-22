nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    x=ml5.poseNet(video,modelloaded);
    x.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is inchlised");
}

function gotposes(a){
    if(a.length>0){
        console.log(a);
        nosex=a[0].pose.nose.x;
        nosey=a[0].pose.nose.y;
        console.log("NOSE X=",nosex);
        console.log("NOSE Y=",nosey);
        leftwristx=a[0].pose.leftWrist.x;
        rightwristx=a[0].pose.rightWrist.x;
        console.log("LEFT WRIST X=",leftwristx);
        console.log("RIGHT WRIST X=",rightwristx);
        difference=floor(leftwristx-rightwristx);
        console.log("difference between leftwrist rightwrist",difference);
        
    }
}
function draw(){
    background("C7CEEA");
    square(nosex,nosey,difference);
    fill('#F90093');
stroke('#F90093');
    document.getElementById("s").innerHTML = "Width And Height of a Square will be = " + difference +"px";
}