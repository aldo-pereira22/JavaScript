// document.getElementById('titulo').innerHTML = 'Olá Mundo!'


// var titulo = document.getElementById('titulo')
// titulo.innerHTML = 'Segundo titulo'

// var campo = document.getElementById('campo')
// campo.value =' Aldo'


// Funções 
// function alterar(titulo){
//     document.getElementById('titulo').innerHTML = titulo
//     document.getElementById('campo').value = titulo
// }

// function somar(x , y){
//     let total = x + y;

//     return total;
// }

//EVENTOS

// function clicou(){
//     document.getElementById('titulo').innerHTML = 'Alterado com o clique'

// }
 
// function digitou(){
//     alert('vc digitou')
// }

// alert('OLÀ')


function limpar(){
    document.getElementById('titulo').classList.remove('azul')
    document.getElementById('titulo').classList.remove('vermelho')
    document.getElementById('titulo').classList.remove('verde')


}

function azul(){
    limpar();
    document.getElementById('titulo').classList.add('azul')

}
function verde(){
    limpar();

    document.getElementById('titulo').classList.add('verde')
}

function vermelho(){
    limpar();
    document.getElementById('titulo').classList.add('vermelho')

}


function a( elemento ){
        document.getElementById('telefone').style.display ="block"
        elemento.style.display = 'none'
}


// ARRAYS

// let carros = ['palio', 'Uno', 'Corolla', 'Ferrari', function(){
//     console.log(carros)
// }]

// console.log(carros[4]())

// let ingredientes = [
//     ['uva', 'pera', 'Abacate'],
//     ['Arroz', 'Macarrão']
// ]

// alert( ingredientes[1][1]);
// alert(ingredientes[0][2])


//OBJETOS

// let carro = {
//     nome: 'Fiat',
//     Modelo: ' Uno',
//     peso: '800 kg',
//     ligar: function(){
//         alert('Vrum Vrumm')
//     },

//     acelerar: function(){
//         alert('zummmmm')
//     }
// }
// carro.ligar()
// carro.acelerar()

//Switch 

let dia  = 2;
let diaNome 
// switch(dia){
//     case 1: 
//         diaNome = 'Segunda-Feira';
//         break;
    
//     case 2: 
//         diaNome = 'Terça-Feira';
//         break;

//     case 3: 
//         diaNome = 'Quarta-Feira';
//         break;

//     case 4: 
//         diaNome = 'Quinta-Feira';
//         break;

//     case 5:
//         diaNome = 'Sexta-Feira'
//         break;

//     case 6: 
//         diaNome =  'Sabado'
//         break;

//     case 7:
//         diaNome = 'Domingo'
//         break;

    
// }


// switch (dia) {
//     case 6:
//         diaNome = 'Final de Semana'
//         break;

//     case 7: 
//         diaNome = ' Final de Semana'
//     default:
//         diaNome = 'Dia de semana! Vai trabalhar'
//         break;
// }
// document.getElementById('dia').innerHTML = 'Hoje é: '+diaNome



// ITERAÇÃO DO FOR NORMAL
// let texto = ''
// for( let i = 0; i <= 10 ; i++ ){
//     texto =  texto  + i + '<br>';
// }


// ITERAÇÃO DO FOR COM ARRAY 

// let carros = ['Ferrai', 'Fusca', 'Palio', 'Corolla', 'Bugato', 'HB20-S', 'JETA'];


// let html = '<ul>';

// for( let i in carros ){
//     html += '<li>'+ carros[i] +'</li>'
// }

// html += '</ul>';



// let html = ''
// let c = 0 ;

// while ( c < 10) {
//     html += " <h3> Numero </h3>: " + c + "<br>"
//     c++;
// }



document.getElementById('demo').innerHTML = html;