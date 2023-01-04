let video;
let poseNetModel;
let posesArray;
function preload(){
    console.log("Loaded")
}

function setup(){
    createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide();
    poseNetModel = ml5.poseNet(video, modelLoaded);
    poseNetModel.on('pose', gotPoses)
}

function gotPoses(result){
    if(result.length > 0){
        posesArray = result[0];
        console.log(posesArray)
    }
}

function modelLoaded(){
    console.log("Loaded...")
}

function draw(){
    image(video,0,0 , 300, 300)
}

function saveImage(){
    save("Image")
}