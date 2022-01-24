var video="";


function setup() {
    canvas=createCanvas(500,300)
    canvas.position(400,190);
    video.hide();
}

function playVideo() {
    modelStore=ml5.objectDetector('cocossd',modelLoaded);  
    document.getElementById("status").innerHTML="Status : Object Detecting";
  }
  