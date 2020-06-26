
class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.velocidade = velocidade
    this.delay = delay
    this.x = width + this.delay
  }

  move() {
    this.x = this.x - this.velocidade;
    if (this.x < -this.largura - this.delay) {
      this.x = width
    }
  }
}













class Inimigo_antigo extends Animacao{
  constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite){
    super(imagem, matriz, x, y, largura, altura, lSprite, aSprite);

    this.velocidade = 30;
  }

  move(){
    this.x=this.x-this.velocidade;
    if(this.x<-this.largura){
      this.x=width;


    }
    somInimigo.play();
    somInimigo.pause();

  }
  
}