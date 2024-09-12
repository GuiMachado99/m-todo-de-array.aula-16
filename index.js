
/*Métodos de Array*/ 

const jogadores = ["Ronaldo", "Ronaldinho", "Adriano", "Kaká"];

jogadores.length(); /*Retorna o número de elementos no array*/
console.log(jogadores)

jogadores.push("Marcelo"); /*Insere um novo elemento no final do array*/
console.log(jogadores)

jogadores.pop() /*Remove o último elemento do array*/
console.log(jogadores)

jogadores.unshift("Romário"); /*Adiciona um novo elemento no inicio do array*/
console.log(jogadores)

jogadores.shift(); /*Remove o elemento do inicio do array*/
console.log(jogadores)

jogadores.splice(0,2); /*Remove o elemento a partir do indice digitado (0,   1) */
console.log(jogadores)

jogadores.includes("Adriano"); /*Verifica se o elemento digitado já está no array e retorna em valor booleano*/
console.log(jogadores.includes("Adriano"))

jogadores.indexOf("Kaká"); /*Indica o indice do elemento no array*/
console.log(jogadores.indexOf("Kaká"))

jogadores.sort(); /*Ordena os elementos do array em ordem alfabética*/
console.log(jogadores)







