const prompt = require('prompt-sync')();

console.log('============================================================================================');
console.log('|| Seja bem-vinde ao Painel de Inclusão Blue EdTech =D                                    ||');
console.log('||                                                                                        ||');
console.log('|| "A multiplicidade da marca representa os diversos públicos que são bem vindos à Blue." ||');
console.log('||                                                                                        ||');
console.log('|| Colocando a diversidade e a representatividade em prática queremos o seu voto para     ||');
console.log('|| escolher a nova pessoa que comporá o quadro de aconselhamento.                         ||');
console.log('||                                                                                        ||');
console.log('|| Queremos agora que conheça um pouco das pessoas candidatas.                            ||');
console.log('||                                                                                        ||');
console.log('|| Para saber mais sobre Camila tecle CA                                                  ||');
console.log('|| Para saber mais sobre Maitê tecle ML                                                   ||');
console.log('|| Para saber mais sobre Murilo tecle MG                                                  ||');
console.log('============================================================================================');
console.log();

var CA = '';
var ML = '';
var MG = '';

var ans = 'S';

do {

    let candidate = prompt('Digite aqui a sua escolha: ');

    switch (candidate) {
        case 'CA':
            console.log();
            console.log('Camila Achutti é mulher, em 2019, virou quadrinho do Maurício de Souza representando as meninas na tecnologia no projeto #DonaDaRua.');
            console.log();
            console.log('É fundadora e CEO da Mastertech, escola de pensamento digital, ágil, lógico e humano.Trabalhou com grandes empresas como\nGoogle, Intel, Accenture, Itaú, Citibank Leroy Merlin, Renault, TIM e IBM.');
            console.log();
            console.log('Ela também é criadora do portal “Mulheres na Computação”, uma das primeiras e mais influentes iniciativas para a inclusão de mulheres no cenário tecnológico contemporâneo.');
            console.log();
            console.log('Acredita que tecnologia é sobre transformação e faz de tudo para levar essa mensagem por onde passa!');
            console.log();
            break;
        case 'ML':
            console.log();
            console.log('Maitê Lourenço é mulher negra, psicóloga, fundadora do BlackRocks Startups, que incentiva empreendedores negros a acessarem o ecossistema de inovação, tecnologia e startup.'); 
            console.log();
            console.log('Finalista do Startup Awards, categoria Impacto Social, uma das mulheres inspiradoras da Think Olga e premiada pela Revista Veja no Prêmio Veja-se, categoria diversidade, todas as premiações em 2017.');
            console.log();
            console.log('Campeã da categoria Impacto Social do Startup Awards, Inspiração do Programa Caldeirão do Huck, Speaker TEDx João Pessoa e EuroLeads - Paris/França em 2018. Em 2019, imersão no Vale do Silício e Intercâmbio profissional pelo IVLP do Consulado Americano.');
            console.log();
            break;
        case 'MG':
            console.log();
            console.log('Murilo Gun é nordestino, se descreve como Ex-nerd dos anos 90. Ex-autor de livros sobre internet. Ex-empresário de tecnologia. Ex-administrador de empresas. Ex-comediante stand-up. Ex-aluno de futurismo da Singularity na NASA. Ex-apresentador de televisão. Ex-perto.');
            console.log();
            console.log('“Ex-perto” porque eu descobri que eu poderia juntar todas essas minhas “ex-periências”, somar com a minha paixão por educação e ir atrás do meu sonho abusado de erradicar o desperdício de potencial humano no mundo.');
            console.log();
            break;
    }
    ans = prompt('Para saber mais sobre outro cadidato digite S ou para dar continuidade à votação digite N ----> ');
    console.log();
} while (ans === 'S');
