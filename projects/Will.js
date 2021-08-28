const prompt = require('prompt-sync')();

var rodada = 0;
var usuarioPontos = 0;
var pontosusuario = 0;
var pontosPc = 0;
var empate = 0;
var partidas = 0;
const escolha = ["PEDRA", "PAPEL", "TESOURA"];

function joKenPo() {

let partidas = +prompt("Escolha quantas partidas vamos disputar: ");
    if (partidas >= 0) {
    console.log(partidas);   
    console.log(`Você escolheu ${partidas} partidas, vamos começar`);
    }
    else { console.log("Digite um número diferente de 0");
    }
}

joKenPo();


function jogar() {
    
    // if (rodada <= partidas) {

    var usuario = +prompt("Escolha: 1 - PEDRA / 2 - PAPEL / 3 - TESOURA")
    if (usuario == 1){
    console.log(`Você escolheu PEDRA!`)
    } else if (usuario == 2){
    console.log(`Você escolheu PAPEL!`)
    } else {
    console.log(`Você escolheu TESOURA!`)
    }

    let computador = Math.floor(Math.random() * escolha.length)
        if (computador == 1) {
        console.log(`O computador escolheu PEDRA!`);
    } else if (computador == 2) {
        console.log(`O computador escolheu PAPEL!`);
    } else {
      console.log(`O computador escolheu TESOURA!`);
    } if ((usuario == 1 && computador == 1) || (usuario == 2 && computador == 2) ||(usuario == 3 && computador == 3)) {
        console.log("Ambos escolheram a mesma opção, DEU EMPATE")
        rodada++
        empate++
    //jogar();

  } else if (usuario == 1 && computador == 2) {
      console.log("O COMPUTADOR GANHOU!")
      rodada++
      pontosPc++
    //  jogar()
  } else if (usuario == 1 && computador == 3) {
      console.log("O usuario GANHOU!")
      rodada++
      pontosusuario++
     // jogar()
  } if (usuario == 2 && computador == 1) {
    console.log("O usuario GANHOU!")
    rodada++
    pontosusuario++
    // jogar()
  } else if (usuario == 2 && computador == 2) {
      console.log("Ambos escolheram a mesma opção, DEU EMPATE")
      rodada++
      empate++
      // jogar()
  } else if (usuario == 2 && computador == 3) {
      console.log("O COMPUTADOR GANHOU!")
      rodada++
      pontosPc++
      // jogar()
  } if (usuario == 3 && computador == 1) {
    console.log("O COMPUTADOR GANHOU!")
    rodada++
    pontosPc++
    // jogar()
  }  else if (usuario == 3  && computador == 2) {
      console.log("O usuario GANHOU")
      rodada++
      pontosusuario++
      // jogar()
  } else if (usuario == 3 && computador == 3) {
      console.log("Ambos escolheram a mesma opção, DEU EMPATE")
      rodada++
      empate++
      // jogar()
} 
    
} 

jogar();


console.log(`Após ${partidas} partidas, o placar de cada um ficou assim:`)
console.log()
console.log(`O usuario fez ${usuarioPontos} ponto(s))`)
console.log()
console.log(`O computador fez ${pontosPc} ponto(s)`)
console.log()
console.log(`Tiveram ${empate} empates`)

if (usuarioPontos < pontosPc) {
    console.log('O grande vencedor é o COMPUTADOR')
} else if (usuarioPontos > pontosPc) {
    console.log('O grande vencedor é o usuario')
} else if (usuarioPontos = pontosPc) {
    console.log('Final empatado, ninguém venceu')
}

partidas = partidas - 1;

while (partidas = 0) {

let jogarNovamente = +prompt('Vamos jogar novamente? 1-SIM / 2-NÃO')

if (jogarNovamente == 1) {

    joKenPo()
    
}
}
//}