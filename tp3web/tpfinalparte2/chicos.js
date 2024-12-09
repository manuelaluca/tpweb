class Chicos {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 20;
    this.vida = 2;
    this.puntos = 0;
    this.chicos = loadImage('data/chicos.png'); 
  }

  dibujar() {
    imageMode(CENTER);
    image(this.chicos, this.posX, this.posY);
  }

  moverDerecha() {
    this.posX += this.velocidad;
  }

  moverIzquierda() {
    this.posX -= this.velocidad;
  }

  calcularColision(mama) {
    let distanciaChicosMama = dist(this.posX, this.posY, mama.posX, mama.posY);

    // Sumar puntos solo si la mamá ha alcanzado el límite inferior de la pantalla
    if (mama.posY >= height - 10) {
      this.puntos += 10;
    }

    // colisión
    if (distanciaChicosMama < 50) {
      this.vida--;
      mama.reiniciarPosicion();
    }
  }
}
