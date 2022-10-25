/*
Calcule a porcentagem entre dois números
Exemplo: 25% de 40 é 10
*/

function calcularPorcentagem(n1, n2){
   porcentagem = ((n2 / n1) * 100).toFixed(2)
   return `${porcentagem}% de ${n1} é ${n2}`;
}

console.log(calcularPorcentagem(40,10));
console.log(calcularPorcentagem(50,2));
console.log(calcularPorcentagem(10,12));