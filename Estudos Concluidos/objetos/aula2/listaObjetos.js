const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "11444444440"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

cliente.enderecos.push({
    rua: "Rua Joseph Cleber",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true,

);

console.log(listaApenasApartamentos);