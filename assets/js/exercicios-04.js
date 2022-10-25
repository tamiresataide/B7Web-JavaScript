/*
Calcule o preço do imóvel
- m² = 3.000
- Se tiver 1 quarto, o m² é 1x
- Se tiver 2 quartos, o m² é 1.2x
- Se tiver 3 quartos, o m² é 1.5x
Uso da função:
*/

let metragem = 123;
let quartos = 3;
let preco =  calcularImovel(metragem, quartos);
console.log(`O imóvel custa R$${preco} reais`)