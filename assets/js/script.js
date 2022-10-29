console.log('Olá Mundo 3.0')

//Variáveis

let idade = 28; // number
let nome = 'Tamires'; // string
let cidade = 'Campina Grande'
let estado = 'Paraíba'

console.log(nome + ' tem ' + idade + ' anos e mora em ' + cidade + ' na ' + estado);

//Tipos de dados

let logado = true; // boolean
let lista = ['ovo', 'farinha', 'açúcar'] // array
let pessoa = { nome: 'Tamires', idade: 28 } // object


console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof lista);
console.log(typeof pessoa);

// Condicional ternário

let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? "Você é membro" : "Você NÃO é membro");
console.log(`Frete: R$${shipping},00`);

let age = 14;

console.log((age >= 18) ? "Você é maior de idade" : "Você é menor de idade");

//switch

let profession = 'veterinário';

switch (profession) {
   case 'bombeiro':
      console.log(`${profession}, sua camisa será VERMELHA`);
      break;
   case 'policial':
      console.log(`${profession}, sua camisa será AZUL`);
      break;
   case 'fiscal':
      console.log(`${profession}, sua camisa será VERDE`);
      break;
   default:
      console.log(`${profession}, sua camisa será PRETA`);
      break;
}


//funções

function verificarIdade(idade) {
   return idade >= 18 ? true : false;
}

console.log(verificarIdade(25));

//Ordenação de arrays

let cars = [
   { brand: 'Fiat', year: 2022 },
   { brand: 'Bmw', year: 2018 },
   { brand: 'Ferrari', year: 2020 },
   { brand: 'Chevrolet', year: 2010 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars)


let frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra']

let bigFruits = frutas.filter(item => item.length > 4);
console.log(bigFruits);


console.log(frutas.every((item) => item.length > 4))
console.log(frutas.some((item) => item.length > 4))


// evento de clique

function clicou() {
   if (document.getElementById("titulo").innerHTML == "Olá JavaScript"){
      document.getElementById("titulo").innerHTML = ("Seja bem vindo")
   } else {
   document.getElementById("titulo").innerHTML = ("Olá JavaScript")
   }
}

let botao = document.querySelector('.titulo');
botao.addEventListener('click', clicou);

// manipulação de elementos


function botaoAppend() {
   const ul = document.querySelector('#lista');
   let newItem = document.createElement('li');
   newItem.innerText = 'Append';

   ul.append(newItem);
}

let appendButton = document.querySelector('.append')
appendButton.addEventListener('click', botaoAppend);  

function botaoPrepend() {
   const ul = document.querySelector('#lista');
   let novoItem = document.createElement('li');
   novoItem.innerText = 'Prepend';

   ul.prepend(novoItem);
}

let prependButton = document.querySelector('.prepend')
prependButton.addEventListener('click', botaoPrepend);  

// BEFORE AND AFTER

function clicou2(){
   const ul = document.querySelector('#lista');
   
   const novoItem = document.createElement('button');
   novoItem.innerText = 'Botão novo'

   ul.after(novoItem);
}

let botaoA = document.querySelector('.after');
botaoA.addEventListener('click', clicou2);

function botaoBefore(){
   const ul = document.querySelector('#lista');
   
   const novoItem = document.createElement('button');
   novoItem.innerText = 'Botão novo'

   ul.before(novoItem);
}

let botaoB = document.querySelector('.before');
botaoB.addEventListener('click', botaoBefore);

// manipulando atributos

function clickAtributo(){
   const input = document.querySelector('#inputTest');
   const checkBox = document.querySelector('label')
   if (input.getAttribute('type') ===  'password'){
      input.setAttribute('type','text');
   }else{
      input.setAttribute('type','password');
   }
}

let checkBox = document.querySelector('#mostrarSenha')
checkBox.addEventListener('click', clickAtributo)