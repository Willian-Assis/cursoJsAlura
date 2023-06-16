const cliente = {
  nome: 'Willian',
  idade: 35,
  cpf: '1122233345',
  email: 'willian@dominio.com',
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
