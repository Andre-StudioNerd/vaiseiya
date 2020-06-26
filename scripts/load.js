function preload(){
    imagemCenario=loadImage('imagens/cenario/fundo_game.png');
    imagemPersonagem=loadImage('imagens/personagem/seiya_pegasus.png');
    imagemInimigo = loadImage('imagens/inimigos/docrates.png');

    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    
    imagemTelaInicial =
    loadImage('imagens/sistema/telaInicial.png');
  fonteTelaInicial =
    loadFont('imagens/sistema/fonteTelaInicial.otf');
    
    imagemParalaxe=loadImage('imagens/cenario/santuario.png');
    
    
    
    imagemGameOver = loadImage('imagens/sistema/over.png');
    
    somDoJogo=loadSound('sons/intro.mp3');
    somPulo = loadSound('sons/jump.mp3');
    somColisao = loadSound('sons/bite.mp3');
    somInimigo = loadSound('sons/pulo_ini.mp3');
    
    }