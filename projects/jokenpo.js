// // The next step is to improve this code to run with tree gamers

const prompt = require('prompt-sync')();

console.log('Vamos jogar Jokenpô!? =D\n');

// // Setting global vars to incremet the counter. Found out that I need to set it here so my program can correctly increment and retain the values in the loops
// // --> Dig up why this works like this

var pc = 0;
var gamer = 0;
let answer = 'S';

// // --> Something tells me that this function should no be here. While learning this place makes sense for me now, so is something to improve
 // // This function turns gamer and pc vars to zero when restarting the whole round and not influence latter results
 
function resetcounter(){
    pc = 0;
    gamer = 0;
}

// // Gamer decides how many games we will have in this round

while ( answer === 'S' ) {
    resetcounter();

    let turn = prompt('Para darmos início você precisa me dizer quantas rodadas faremos, digita aí: ');

        do {

        // // Recording gamer's choice

        var joken = prompt('\nVocê quer pedra, papel ou tesoura? ');

        // // Generating pc's choice

        let poList = ['pedra', 'papel', 'tesoura'];
        let list = poList.length;
        let random = Math.floor(Math.random() * list);
        var choice = poList[random];

        // // Executing the game adding a victory's counter to vars
        // // Beggining the comparison with rock and adding up the results

        if ( joken === 'pedra' && choice === 'pedra'){
        console.log(`Você escolheu pedra e eu escolhi ${poList[0]} - EMPATE\n`);
        } else if ( joken === 'pedra' && choice === 'papel'){
        console.log(`Você escolheu pedra e eu escolhi ${poList[1]} - GANHEI\n`);
        pc = ++pc;
        } else if  ( joken === 'pedra' && choice === 'tesoura'){
        console.log(`Você escolheu pedra e eu escolhi ${poList[2]} - PERDI\n`);
        gamer = ++gamer;
        
        // // Beggining the comparison with paper and adding up the results

        } else if ( joken === 'papel' && choice === 'pedra'){
        console.log(`Você escolheu papel e eu escolhi ${poList[0]} - PERDI\n`);
        gamer = ++gamer;
        } else if ( joken === 'papel' && choice === 'papel'){
        console.log(`Você escolheu papel e eu escolhi ${poList[1]} - EMPATE\n`);
        } else if  ( joken === 'papel' && choice === 'tesoura'){
        console.log(`Você escolheu papel e eu escolhi ${poList[2]} - GANHEI\n`);
        pc = ++pc;
        
        // // Beggining the comparison with scissors and adding up the results

        } else if ( joken === 'tesoura' && choice === 'pedra'){
        console.log(`Você escolheu tesoura e eu escolhi ${poList[0]} - GANHEI\n`);
        pc = ++pc;
        } else if ( joken === 'tesoura' && choice === 'papel'){
        console.log(`Você escolheu tesoura e eu escolhi ${poList[1]} - PERDI\n`);
        gamer = ++gamer;
        } else if  ( joken === 'tesoura' && choice === 'tesoura'){
        console.log(`Você escolheu tesoura e eu escolhi ${poList[2]} - EMPATE\n`);
        }

        // // Validating couter
        // console.log(gamer);
        // console.log(pc);

    // // Rebooting the game of this round
    turn = turn - 1;
    } while (turn > 0);

    // // Displaying results

    if ( gamer === pc){
        console.log('\nAcabamos de empatar e acho que vale um tira-teima, não?\n');
    } else if ( pc > gamer ) {
        console.log(`\nGanhei o jogo por ${pc} x ${gamer}. Obrigada pela partida! Você foi um ótimo adversário. Na próxima faremos melhor!\n`)
    } else {
        console.log (`\nGanhaste o jogo por ${gamer} x ${pc}. Parabéns e obrigada pela partida, na próxima faremos melhor.\n`)
    }

        answer = prompt('Deseja jogar novamente? [S / N] ');
} if (answer = 'N') {
    console.log('\nAté a volta! =D')
}
