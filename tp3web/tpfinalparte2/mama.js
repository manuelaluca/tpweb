class Mama {
  constructor() {
    this.posX = random(width);
    this.posY = random(-100, -10);
    this.velocidad = 3.1;
    this.mama = loadImage('data/mama.png');
  }

  dibujar() {
    imageMode(CORNER);
    image(this.mama, this.posX, this.posY);
  }

  mover() {
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.reiniciarPosicion();
    }
  }

  reiniciarPosicion() {
    this.posX = random(width);
    this.posY = random(-100, -10);
  }
}
