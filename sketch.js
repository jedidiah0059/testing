var cat, catWalk, catSitting, catLying;

var mouse, mouse1, mouse2, mouse3;

var bakground, bakgroundImage;


function preload() {
    catWalk = loadAnimation("images/cat3.png","images/cat2.png");
    catSitting = loadAnimation("images/cat4.png");
    catLying = loadAnimation("images/cat1.png");
    bakgroundImage = loadImage("images/garden.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(windowWidth + 300, windowHeight);

    bakground = createSprite(width / 2, height / 2, 10, 10);
    bakground.addImage(bakgroundImage);
    //bakground.scale = 2;

    cat = createSprite(width - 500, height - 150, 10, 10);
    cat.addAnimation("sit", catSitting);
    cat.scale = 0.2;

    mouse = createSprite(width / 3, height - 150, 10, 10);
    mouse.addAnimation("mousea", mouse1);
    mouse.addAnimation("mousea", mouse2);
    mouse.addAnimation("mousea", mouse3);
    mouse.scale = 0.2;


}

function draw() {

    background(255,255,255);

    drawSprites();
}


function keyPressed(){




}
