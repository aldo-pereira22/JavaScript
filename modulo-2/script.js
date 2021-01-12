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
