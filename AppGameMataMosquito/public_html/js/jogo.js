var altura = 0;
var largura = 0; 
var vidas = 1;
var tempo = 10;
var criaMosquitoTempo = 1500;
var nivel = window.location.search;
nivel =  nivel.replace('?','');
alert(nivel.replace('?',''));

if(nivel==='e'){
    criaMosquitoTempo = 1500;
    
}else if(nivel==='m'){
    criaMosquitoTempo = 1000;
    
}else if(nivel==='h'){
    criaMosquitoTempo =750;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth; 
    console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();
var cronometro = setInterval(function(){
    tempo -= 1;
    if (tempo<0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria_jogo.html'
        
    }else{
        
    }
    document.getElementById('cronometro').innerHTML = tempo;
    
},1000);

function posicaoRandomica(){
    //remover mosquito se existir
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        //remove as vidas
        if(vidas>3){
            window.location.href = 'fim_jogo.html'
        }
        document.getElementById('v'+vidas).src = 'img/coracao_vazio.png';
        vidas++;
    }
    
    //posicao aleatoria para cria mosquito
    var posicaoX = Math.floor(Math.random() * largura) - 150;
    var posicaoY = Math.floor(Math.random() * altura) - 150;
    if (posicaoX < 0) {
        posicaoX = 0;   
    }
    
    if (posicaoY < 0) {
        posicaoY = 0;   
    }
    
    console.log(posicaoX, posicaoY);

    // cria elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = tamanhoaleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px'; 
    mosquito.style.top = posicaoY + 'px'; 
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function (){
        this.remove();
        console.log('matei');
    }
    document.body.appendChild(mosquito);   
}

function tamanhoaleatorio(){
    var classe = Math.floor(Math.random() * 3);
    switch (classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3'
    }  
}

function ladoAleatorio(){
    var tamanho = Math.floor(Math.random() * 2);
    switch (tamanho){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }  
}



