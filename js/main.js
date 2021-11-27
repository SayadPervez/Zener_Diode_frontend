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

function drawLine(p, q, color="black",size=1) {
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

function draw() {
    // All subplots are done here...
    // Do not delete !!!
    drawLine(pt(100,100),pt(400,400));
    drawPoint(pt(200,200));
    canvaWrite("Initial setups completed !",pt(210,205),"red");
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
