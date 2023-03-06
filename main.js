//BUSCAR ELEMENTO NO HTML
//Parametro é o que conseguimos passar para nossa função e que a execução depende para funcionar, pode ser opcional
//funções anaonimas: sem nome so podem ser utilizadas no contexto de serem valores de atributos ou armazenadas na referencia constante ou  variavel
function tocaSom(idElementoAudio){

    const elemento = document.querySelector(idElementoAudio);
     if ( elemento && elemento.localName==='audio') {
       elemento.play();
    }
    
    else {
       console.log("Elemento não encontrado");
     }

}
  const  ListasDeTeclas = document.querySelectorAll('.tecla');
  /* let contador = 0; */
  //enquanto
  for(let contador = 0; contador < ListasDeTeclas.length; contador++){
    
    const tecla = ListasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;    //template String

    ListasDeTeclas[contador].onclick = function() {
        tocaSom(idAudio);
    }
      
    tecla.onkeydown = function (evento) {
      /* console.log(evento.code == 'Enter') */

       if (evento.code ==='Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa');
      }
    }

    tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
    }

/*     contador = contador + 1; */

    /* console.log(contador); */
    
  }

