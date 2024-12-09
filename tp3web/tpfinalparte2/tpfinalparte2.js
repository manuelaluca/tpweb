let objJuego;                                                         //Manuela Luca 119071/8
let fondos = [];                                                     // Comisión 2
let sonido;                                                         //https://youtu.be/3bXDF8gUaAM

function preload() {
  
  soundFormats('mp3');
  sonido = loadSound("data/sonido.mp3");

  
  for (let i = 0; i < 4; i++) {
    fondos.push(loadImage('data/fondo' + i + '.png'));
  }
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(fondos); 
}

function draw() {
  background(220);
  objJuego.dibujar(); 
  objJuego.actualizarMama();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
  
  if (keyCode === LEFT_ARROW) {
    objJuego.chicos.moverIzquierda();
  } else if (keyCode === RIGHT_ARROW) {
    objJuego.chicos.moverDerecha();
  }

  
  if (key === 'r') {
    if (sonido.isPlaying()) {  
      sonido.stop();           
    }
    objJuego = new Juego(fondos);
  }
}


function mousePressed() {
 
  if (objJuego.estado === 0) { 
    if (detectarBoton(450, 360, 100, 50)) {
      objJuego.estado = 4; // Cambia el estado a "instrucciones"
    } else if (detectarBoton(450, 420, 100, 50)) {
      objJuego.estado = 5; // Cambia el estado a "créditos"
    }
  }
}


function dibujarBoton(x, y, w, h, texto) {
  fill(50, 220, 50);
  rect(x, y, w, h);
  textSize(20);
  fill(50);
  text(texto, x + 10, y + 30); 
}


function detectarBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
