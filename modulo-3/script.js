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

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa']
let res = lista.toString() // TRANSFORMA O ARRAY EM STRING

lista.pop() //  REMOVE O ULTIMO ITEM DO ARRAY

res =  lista.join('-') // Pega cada elemento e concatena com o caractere desejado
//res = lista.indexOf('Corante') // Retorna a posição do elemento, senão encontrar retorna -1



lista.shift() // RETIRA O PRIMEIRO ITEM DO ARRAY
lista.push('Queijo-ralado') // ADICIONA UM NOVO ITEM NO ARRAY
res = lista
alert(res)