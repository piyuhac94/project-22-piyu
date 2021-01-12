var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var edges;
var op;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box1 = createSprite(730,570,200,60);
    box2 = createSprite(520,570,190,60);
    box3 = createSprite(310,570,190,60);
    box4 = createSprite(100,570,190,60);
    op = createSprite(400,300,60,60);

    op.velocityX = 5
    op.velocityY = 7

    op.shapeColor = "white"

    box1.shapeColor = "green"
    box2.shapeColor = "pink"
    box3.shapeColor = "orange"
    box4.shapeColor = "blue"



    edges = createEdgeSprites();    

     

}

function draw() {
    background("black");


    if (op.isTouching(box1)){
        op.shapeColor = "green"
        music.play();
    }

    if (op.isTouching(box2)){
        op.shapeColor = "pink"
        music.play();
    }

    if (op.isTouching(box3)){
        op.shapeColor = "orange"
        music.play();
    }

    if (op.isTouching(box4)){
        op.shapeColor = "blue"
        music.play();
    }
   
    op.bounceOff(box1); 
    op.bounceOff(box2); 
    op.bounceOff(box3); 
    op.bounceOff(box4);  
    op.bounceOff(edges);



    drawSprites();

}
