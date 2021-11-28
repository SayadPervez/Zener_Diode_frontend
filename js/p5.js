var canvasHeight = 500;
var canvasWidth = 900;

function setup()
{
    var myCanvas = createCanvas(canvasWidth,canvasHeight);
    myCanvas.parent("canvasContainer");
}

function draw()
{
    background('white');
    A = pt(100,100);
    B = pt(100,400);
    //drawLine(A,B,"red");
    diodeZener(A);
}

function drawPoint(P,color="black",size=10)
{
    strokeWeight(size);
    stroke(color);
    point(P.x,P.y);
}