/*
Calcule o preço do imóvel
- m² = 3.000
- Se tiver 1 quarto, o m² é 1x
- Se tiver 2 quartos, o m² é 1.2x
- Se tiver 3 quartos, o m² é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos){
   let metro2 = 3000
   let preco = 0
   switch (quartos) {
      case 1:
      default:
         preco = (metragem * metro2).toFixed(2);
         break;
      case 2:
         metro2 = metro2 * 1.2
         preco = (metragem * metro2).toFixed(2);
         break;
      case 3:
         metro2 = metro2 * 1.5
         preco = (metragem * metro2).toFixed(2);
         break;
   }
   return preco;
}

let metragem = 123;
let quartos = 3;
let preco =  calcularImovel(metragem, quartos);
console.log(`O imóvel custa R$ ${preco} reais`)


metragem = 30;
quartos = 1;
preco =  calcularImovel(metragem, quartos);
console.log(`O imóvel custa R$ ${preco} reais`)

metragem = 50;
quartos = 2;
preco =  calcularImovel(metragem, quartos);
console.log(`O imóvel custa R$ ${preco} reais`)