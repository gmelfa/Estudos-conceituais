const listaLivros = require('./array');

listaLivros.sort((a,b) => a.preco - b.preco);

console.log(listaLivros)