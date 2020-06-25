class Animacao {
    constructor(imagem, matriz, x, y, largura, altura, lSprite, aSprite) {
      this.imagem = imagem;
      this.matriz = matriz;
      this.x = x;
      this.y = y;
      this.largura = largura;
      this.altura = altura;
      this.lSprite = lSprite;
      this.aSprite = aSprite;
      
      this.frameAtual = 0;
    }
    
    exibe() {
      image(this.imagem, this.x, this.y, 
            this.largura, this.altura, 
            this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 
            this.lSprite, this.aSprite);
      
      this.anima();
    }
    
    anima() {
      this.frameAtual++;
      
      if (this.frameAtual >= this.matriz.length-1){
        this.frameAtual = 0; 
      }
    }
  }