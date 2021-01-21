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


let pessoa = lista3.find(function(item){

    return (item.sobrenome == "Pereira") ? true : false
})


console.log(pessoa)
alert(pessoa)

