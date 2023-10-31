const cliente = {
    nome: "Andre",
    idade : 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
}

console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF sao ${cliente.cpf.substring(0, 3)}`)