/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

function validar(usuario, senha){
   return (usuario === 'pedro' && senha === '123') ? true : false;
}

//Uso da função:
let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario, senha);
if(validacao){
   console.log('Acesso concedido.');
} else {
   console.log('Acesso NEGADO!');
}