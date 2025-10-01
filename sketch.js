let present;

function preload()
{
present = loadImage("final.gif");

}

function setup() 
{
    createCanvas(400, 400);
}

function draw()
{
background(255,255,0);
image(present,0,0);
fill(255);
ellipse(100, 100, 100, 100);
}
