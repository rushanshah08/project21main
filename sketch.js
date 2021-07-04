var canvas;
var redblock;
var blueblock;
var orangeblock;
var greenblock;
var ball;
var walltop;
var wallright;
var wallbottom;
var wallleft;
var music;
var edges;

function preload()
{
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redblock = createSprite(0,580,360,30);
    redblock.shapeColor = "red";

    blueblock = createSprite(295,580,200,30);
    blueblock.shapeColor = "blue";

    orangeblock = createSprite(515,580,200,30);
    orangeblock.shapeColor = "orange";

    greenblock = createSprite(740,580,220,30);
    greenblock.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(redblock) && ball.bounceOff(redblock)){
        ball.shapeColor = "red";
        music.play();
    }

    if(ball.isTouching(blueblock)&& ball.bounceOff(blueblock)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching(orangeblock) && ball.bounceOff(orangeblock)){
        ball.shapeColor = "orange";
    }

    if(ball.isTouching(greenblock) && ball.bounceOff(greenblock)){
        ball.shapeColor = "green";
    }

    drawSprites();
}