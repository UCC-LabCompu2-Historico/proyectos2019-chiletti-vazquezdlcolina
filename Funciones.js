function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1
  var numStr = s.substr(0, decimalLength + posiciones)
  return Number(numStr)
}

function perimetroCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio').value);
    var resultado = (2*pi*radio);
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}

function perimetroTriangulo(){
      var ladoA = parseFloat(document.getElementById('lado1').value);
      var ladoB = parseFloat(document.getElementById('lado2').value);
      var ladoC = parseFloat(document.getElementById('lado3').value);
      var resultado = ladoA + ladoB + ladoC;
      var resultadoTruncado = trunc(resultado, 2);
      alert("El resultado es: " + resultadoTruncado);
}

function perimetroCuadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var resultado = 4 * lado 
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}

function perimetroRectangulo(){
  var base = parseFloat(document.getElementById('base').value);
  var altura = parseFloat(document.getElementById('altura').value);
  var resultado = 2*(base+altura);
  var resultadoTruncado = trunc(resultado, 2);
  alert("El resultado es: " + resultadoTruncado); 

}

function areaCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio2').value);
    var resultado = (pi * (radio * radio));
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}

function areaTriangulo(){
    var baseT = parseFloat(document.getElementById('base2').value);
    var alturaT = parseFloat(document.getElementById('altura2').value);
    var resultado = (baseT * alturaT) / 2;
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);

}

function areaCuadrado(){
    var ladoCD = parseFloat(document.getElementById('ladoCuadrado').value);
    var resultado = (ladoCD * ladoCD);
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncao);
}

function areaRectangulo(){
  var baseR = parseFloat(document.getElementById('baseRectangulo').value);
  var alturaR = parseFloat(document.getElementById('alturaRectangulo').value);
  var resultado = baseR*alturaR;
  var resultadoTruncado = trunc(resultado, 2);
  alert("El resultado es: " + resultadoTruncado); 
}


var posX;
var can;
var contexto;
var direccion;
window.onload = function() {
    can = document.getElementById("miCanvas");
    contexto = can.getContext("2d");
    posX=15;
    direccion = 0;
    setInterval("dibujarCirculo()",2);
}
function dibujarCirculo() {
    var radioC = parseFloat(document.getElementById('radio').value);
    if (direccion == 0)
        posX++;
    else
        posX--;
    if (posX==350)
        direccion = 1;
    if (posX==50)
        direccion = 0;

    can.width = can.width; // limpia el canvas
    contexto.strokeStyle = "#000000";
    contexto.fillStyle = "blue";
    contexto.beginPath();
    contexto.arc(posX,100,radioC,0,Math.PI*2,true);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();
}

function dibujarTriangulo() {
  var canvas = document.getElementById('miCanvas2');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    var ladoT1 = parseFloat(document.getElementById('lado1').value);
    var ladoT2 = parseFloat(document.getElementById('lado2').value);
    var ladoT3 = parseFloat(document.getElementById('lado3').value);
    var px = canvas.width/2;
    var py = canvas.height/2;
    ctx.beginPath();
    ctx.moveTo(px,py);
    ctx.lineTo(ladoT1,ladoT2);
    ctx.lineTo(ladoT2, ladoT3);
    ctx.closePath();
    ctx.fill();
  }
}
function dibujarCuadrado(){
var canvas, ctx, x, y, direccion = 0;
var ladoCuadrado = parseFloat(document.getElementById('lado').value); 
canvas = document.getElementById('miCanvas3');
ctx = canvas.getContext('2d');
x = canvas.width/2;
y = 0;
setInterval(function() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (direccion == 0)
        y++;
    else
        y--;
    if (y==350)
        direccion = 1;
    if (y==50)
        direccion = 0;
   ctx.fillRect(x, y, ladoCuadrado, ladoCuadrado);
}, 2);
}

function dibujarRectangulo(){ 

    var canvas=document.getElementById("miCanvas4"); 
    var ctx=canvas.getContext("2d"); 
    var baseR = parseFloat(document.getElementById('base').value);
    var alturaR = parseFloat(document.getElementById('altura').value);
    var startX=canvas.width/2; 
    var startY=canvas.height/2; 

    ctx.beginPath(); 
    ctx.rect(startX,startY,baseR,alturaR); 
    ctx.fillStyle="blue"; 
    ctx.fill(); 

    dibujarRectanguloRotado(startX,startY,baseR,alturaR,45); 
    window.requestAnimationFrame(dibujarRectanguloRotado);

    function dibujarRectanguloRotado(x,y,width,height,degrees){ 

     ctx.save(); 
     ctx.beginPath(); 
     ctx.translate(x+width/2, y+height/2); 
     ctx.rotate(degrees*Math.PI/180); 
     ctx.rect(-width/2, -height/2, baseR,alturaR); 
     ctx.fillStyle="gold"; 
     ctx.fill(); 
     ctx.restore(); 


    } 
    
}


