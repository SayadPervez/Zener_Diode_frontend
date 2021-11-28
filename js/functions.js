function pt(x=0,y=0){
    // This is a point object and holds x and y values
    if (!(this instanceof pt)){
         return new pt(x,y);
    }
    this.x = x;
    this.y = y;
}

function drawLine(P,Q,color="black",width=2)
{
    stroke(color)
    strokeWeight(width);
    line(P.x,P.y,Q.x,Q.y);
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