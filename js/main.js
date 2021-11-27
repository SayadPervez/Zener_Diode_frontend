let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvas_width = 500;
let canvas_height = 500;
let orgx = 100;
let orgy = 100;

function drawPoint(ctx, x, y) {
    var radius = 3.0;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.lineWidth = 1;
    ctx.arc(x, y, radius*1.3, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}

function drawAxes() {
    ctx.beginPath();
    // Vertical line
    ctx.moveTo(orgx, 100);
    ctx.lineTo(orgx, 530);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Horizontal line
    ctx.moveTo(100, 510);
    ctx.lineTo(window.screen.width-100, 510);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // Base line
    ctx.moveTo(orgx, orgy);
    ctx.lineTo(window.screen.width-100, orgy);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //ctx.font = "20px Arial";
    //ctx.fillStyle = "black";
    //ctx.fillText("Amplitude", 100, 120, 90);
    //ctx.fillText("Time", window.screen.width-200, 530, 70);
    ctx.closePath();
}

function xrange(start, stop, step) {
    var res = [];
    var i = start;
    while (i <= stop) {
        res.push(i);
        i += step;
    }
    return res;
}

function drawGraph() {
    drawAxes();
}

function draw() {
    // Clear the screen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    drawGraph();
    requestAnimationFrame(draw);
}

function d2b(x,bitLength=8)
{
    var result = "0000000000000000000000000"+(x >>> 0).toString(2);
    return(result.substr(result.length-bitLength));
}

requestAnimationFrame(draw);
