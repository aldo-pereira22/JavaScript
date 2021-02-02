// let nome = 'Aldo Pereira pinto'

// let resultado = ''

// if (nome.indexOf('Ma') > -1 ){

//     resultado = 'Achou!!! '
// }else {
//     resultado = 'Não achou'
// }
// alert(resultado)

// let nome = 'Aldo Pereira Pinto'

// // Divide a parte das 
// let resultado = nome.slice(0,10)
// alert(resultado)

// let nome = 'Aldo Pereira Silva'
// nome = nome.replace('Silva', 'Pinto')

// nome = nome.toUpperCase() // Deixar letras maiusculas

// nome = nome.toLocaleLowerCase()     // Deixar letras minusculas

// nome = nome.charAt(3) // Mostra qual caraqtere está nessa posição
// nome = nome.split(' ') // Separa a stringo no caractere desejado
// alert( nome)

//MANIPULAÇÃO DE NUMEROS

// let n = 10.29393

// let resultado = n.toFixed(2); // Formata a quantidade de casas decimais

// resultado = n.toString // transforma o numero em String

// resultado =  parseInt(resultado) // Passa uma string para number



// METODOS DE MANIPULAÇÃO DE ARRAYS

// let lista = ['Ovo', 'Farinha', 'Corante', 'Massa']
// let lista2 = [ 'Açuar', ' Fubá', 'Milho']


// //let res = lista.toString() // TRANSFORMA O ARRAY EM STRING

// let res = []
// lista.pop() //  REMOVE O ULTIMO ITEM DO ARRAY

// res =  lista.join('-') // Pega cada elemento e concatena com o caractere desejado
// //res = lista.indexOf('Corante') // Retorna a posição do elemento, senão encontrar retorna -1



// lista.shift() // RETIRA O PRIMEIRO ITEM DO ARRAY
// lista.push('Queijo-ralado') // ADICIONA UM NOVO ITEM NO ARRAY


// lista.splice(1,1) // Deleta o item no index desejado
// lista [0] = 'Ovos' // Altera o valor do item, caso não exista o index, ele cria


// lista.sort()
// lista2.sort()
// res = lista.concat(lista2)

// res.sort() // Orderna o Array em ordem crescent
// res.sort().reverse() // Orderna o Array em ordem decrescente
// alert(res)
let lista = [45, 4, 9, 16, 25];
let lista2 = [];


// Função MAP

// lista2 = lista.map(function(item) {

//     return item * 2
// })


for( let i in lista){
    lista2.push(lista[i] * 2);
}




// Filtra os valores de acordo com a condição estabelecida
lista2 = lista.filter(function(item){
    if(item > 20){
        return true
    }else {
        
        return false

    }
})


// Verifica se todos os itens do array são verdadeiro ou falso
lista2 = lista.every(function (item){

    if(item > 20){
        return true
    }else {
        return false
    }
})


// Verifica se alguns dos intens do array são verdadeiros

lista2 = lista.some(function (item) {
    if(item > 20 ){
        return true;
    }else {
        return false
    }
})
let res = lista2


// Retorna o primeiro item que atende a condição
lista2 = lista.find(function (item){

    return (item ==  16) ? true : false;

})

let lista3  = [
    { id: 1, nome:"Aldo", sobrenome:"Pereira"},
    { id:2, nome: "João", sobrenome:" Da Silva"},
    { id:2, nome: "FULANO", sobrenome:" Da Alves"}

]


// let pessoa = lista3.find(function(item){

//     return (item.sobrenome == "Pereira") ? true : false
// })


// FUNÇÃO DATE


let d = new Date();


// FUNÇÕES MATEMATICAS


// O número pi
let pi = Math.PI;


// Arrendodamento
let arredondamento = Math.round(3.67)


// Faz arrendondamento para baixo
arredondamento  = Math.floor

// Faz arredondamento para cima
arredondamento = Math.ceil



// Retorna o menor valor entre eles
arredondamento = Math.min(7,22,30,99,120)


// Retorna o maior  valor entre eles
arredondamento = Math.max(7,22,30,99,120)


// Retorna um número aleatorio entre 0 e 1
arredondamento = Math.random()


// Retorna um número aleatorio entre 0 e 100
arredondamento = Math.floor( Math.random() * 100 )


// Intervalos

function showTime(){
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    
    let txt =  h+':'+m+':'+s
    document.querySelector('.teste').innerHTML = txt;

}


let timer;
function comecar(){
    
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer)
}


// setTimeout(function( ){
//     alert('Rodou')

// },2000)


console.log(arredondamento)


// TEMPLATE STRING
let nome =' aldo'
let idade = 30

// let frase = ' Meu nome é: '+nome+' e eu tenho'+idade+ ' anos';
let frase = `Meu nome é ${nome} ... e eu tenho ${idade} ... anos`;


//Desconstrução / desestruturação de objetos

let pessoa = {
    nome:'Aldo',
    sobrenome: 'Pereira',
    idade: 30,
    social: {
        facebook: '@facebookaldo',
        instagram:'aldo.22'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }

}


console.log(pessoa.nome)

let nome1 = pessoa.nome;
let sobrenome =  pessoa.sobrenome;
let idade1 = pessoa.idade;



// Outra forma de retirar atributos de um objeto: 
let { nome:nomePessoa, sobrenome: sobrenomePessoa, idade:idade3} = pessoa;


// Pegar os atributos dentro de outro objeto
let {facebook, instagram:instagram1} = pessoa.social;


// Outra forma, junto com os outros atributos

let { nome3, idade4, social:{instagram} } = pessoa


// Desconstruindo Arrays
let array = ['Aldo Pereira', 'Aldo', 'Pereira', '@Pereira']
let [nomeCompleto, nomeArray, sobrenomeArray, instagramArray] = array 

//ARROW FUNCTION
// let somar = function( x , y){


//     return x + y;
// }

// let somar = (x, y) => {
//     return x + y
// }

let soma = (x , y) => x * y

let letras = (nome) => nome.length



// SPREAD
let numeros = [1, 2, 3, 4]

let outros = [...numeros, 5,6,7]

// SPREAD COM OBJETOS

let info = {
    nome: 'Aldo',
    sobrenome: 'Pereira'
}

console.log(info)


let novaInfo = {
    ...info,
    cidade: 'Goiania',
    estado: 'GO'
}


// OPERADOR RESTs
// function adicionar(...numeros){
//     console.log(numeros)
// }


// function adicionar(nomes, ...novosNomes){
//     let novoConjunto = [
//         ...nomes,
//         ...novosNomes
//     ]

//     return novoConjunto
// }

// let nomes = ['Aldo', 'Marcos']
// let outros1 = adicionar(nomes, 'Aldo', 'João')

// INCLUDES
// let lista1 = ['ovo', 'cafe', 'Arroz', 'Feijao', 'Macarrao']



// alert('x'.repeat(20 ))

//Objeto, Values, Entries
// let lista1 = [ 'ovo', 'macarrao', 'feijao', 'pipoca']



// console.log(Object.values(lista1))

// String, padStart, padEnd


let telefone = '5'

// Adiciona o limite de 9 caracters, se não tiver completa
console.log(telefone.padEnd(9,'*'))

//Adiciona no inicio
// console.log( telefone.padStart(9,'-') )
// let cartao = '1234 1234 1234 1234'
// let lastDigits = cartao.slice(-4)

// let cartaoMascarado = lastDigits.padStart(16,'*')
// console.log(cartaoMascarado)


// Promise
// function fazer(){
//     let promise  =  new Promise( ( resolve, reject )=>{
        
//         setTimeout( ()=> {
//             resolve('ok')
//         }, 3000)
//     } );
//     return promise;
// }

// fazer().then( (resposta)=>{
//     console.log(resposta)
// } )


// fetch('https://alunos.b7web.com.br/api/ping')
//     .then( (r)=>r.json())
//     .then((json)=>{
//         console.log(json)
//     })

function requisitar(){
    const url = 'https://alunos.b7web.com.br/api/ping'
    const params= {
        method:'POST',
        body:JSON.stringify({
            nome:"Aldo",
            idade:99
        })
    }

    fetch(url, params)
        .then((r)=>r.json())
        .then((json)=>{
            console.log(json)
        })
}

async function requisitar2(){
    const url = 'https://alunos.b7web.com.br/api/ping'
    const params= {
        method:'POST',
        body:JSON.stringify({
            nome:"Aldo",
            idade:99
        })
    }

    const r = await fetch(url, params)
    const json  = await r.json();
    console.log(json)
    console.log('alguma coisa')
}
requisitar2()