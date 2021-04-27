var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(0,580,360,30);
box1.shapeColor = "green";
box2 = createSprite(295,580,200,30);
box2.shapeColor = "blue";
box3 = createSprite(515,580,200,30);
box3.shapeColor = "red";
box4 = createSprite(740,580,220,30);
box4.shapeColor = "yellow";


    //create box sprite and give velocity
ball = createSprite(random(20,750),100,40,40);
ball.shapeColor = rgb(255,255,255);
ball.velocityX = 2;
ball.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(box1.isTouching(ball) && ball.bounceOff(box1)) {
        ball.shapeColor = "green";
        music.play();
    }

    if(box2.isTouching(ball) && ball.bounceOff(box2)) {
        ball.shapeColor = "blue";
        music.play();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)) {
        ball.shapeColor = "red";
        music.play();
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)) {
        ball.shapeColor = "yellow";
        music.play();
    }

    drawSprites();
}
