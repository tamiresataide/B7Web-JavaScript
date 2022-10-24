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

function verificarIdade(idade){
   return idade >= 18 ? true : false;
}

console.log(verificarIdade(25));