
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario=new Cenario(imagemCenario,10);
  paralaxe=new Paralaxe(imagemParalaxe,12);
  pontuacao = new Pontuacao();
  
  const inimigo = new Inimigo(imagemInimigo, matrizInimigo, width-55, height-240, 50, 50, 96, 96,10, 200);

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width , 0, 200, 200, 400, 400, 10, 2500)  
  personagem=new Personagem(imagemPersonagem,matrizInimigo,255, height-240, 50, 50, 96, 96);


  
  
  
  
  frameRate(5);
  somDoJogo.loop();
  
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pular();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();
  


  personagem.exibe();
  personagem.simularGravidade();

 

  
  
    inimigo.exibe();
    inimigo.move();

    paralaxe.exibe();
    paralaxe.move();

  if (personagem.detectarColisao(inimigo)) {
    somColisao.play();
    somDoJogo.pause();
    
    noLoop();
    image(imagemGameOver, 0, 0, width, height);
  }


  

  
  
  
  }

