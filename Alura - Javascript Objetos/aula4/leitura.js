const dados = require('./cliente.json');

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados); //transforma em string

console.log(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //transforma em objeto

console.log(objetoCliente);
