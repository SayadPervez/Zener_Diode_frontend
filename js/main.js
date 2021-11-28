/*
        Initialization Section
*/
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

/*
        Canvas object / functions Section
*/
function pt(x=0,y=0){
    // This is a point object and holds x and y values
    if (!(this instanceof pt)){
         return new pt(x,y);
    }
    this.x = x;
    this.y = y;
}

function typeValidate(x) {
    // Returns true if x is a object else false
    if(typeof(pt(100,100))=="object")
        return(true);
    else
        return(false);
}

function drawPoint(p,color="black",size = 3.0) {
    // Draws a point at p
    var radius = size;
    ctx.beginPath();
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.arc(p.x, p.y, radius*1.3, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}

function drawLine(p, q, color="black",size=2) {
    // Draws a line from p to q
    ctx.beginPath();
    ctx.lineWidth = size;
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(q.x, q.y);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.lineWidth = 1;
}

function canvaWrite(text,p,color="black",font="20px Urbanist") {
    // Writes to the canvas
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, p.x, p.y);
}

function diodeZener(p) {
    // Zener Diode Component
    var px = p.x; var py = p.y;
    var A = p;
    var B = pt(px,py+35);
    var XX = pt(B.x-20,B.y);
    var X = pt(XX.x-10,XX.y+10);
    var YY = pt(B.x+20,B.y);
    var Y = pt(YY.x+10,YY.y-10);
    var D = pt(p.x,p.y+65);
    var C = pt(D.x-20,D.y);
    var E = pt(D.x+20,D.y);
    var F = pt(p.x,p.y+100);
    // Plotting
    drawLine(A,B);
    drawLine(B,C);
    drawLine(B,E);
    drawLine(C,E);
    drawLine(D,F);
    drawLine(B,XX);
    drawLine(XX,X);
    drawLine(B,YY);
    drawLine(YY,Y);
    drawPoint(A,"#e65100");
    drawPoint(F,"#e65100");
}

function draw() {
    // All subplots are done here...
    // Do not delete !!!
    diodeZener(pt(100,100));
}

function draw_____() {
    // This part is executed onload...
    // Do not touch !!!
    // Do not delete !!!
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(draw_____);
}

/*
        General Functions
*/
function range(start, stop, step) {
    // Returns a range list
    var res = [];
    var i = start;
    while (i <= stop) {
        res.push(i);
        i += step;
    }
    return res;
}

function d2b(x,bitLength=8) {
    // Decimal to binary conversion
    var result = "0000000000000000000000000"+(x >>> 0).toString(2);
    return(result.substr(result.length-bitLength));
}

/*
        Arbitary Run Section
*/
requestAnimationFrame(draw_____);
