const cliente = {
  nome: 'Willian',
  idade: 35,
  email: 'will@firma.com',
  telefone: ['1155555550', '4435526666'],
};

cliente.enderecos = [
  {
    rua: 'R. Ametista',
    numero: 268,
    apartamento: true,
    complemento: 'casa amarela',
  },
];
for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== 'object' && tipo !== 'function') {
    console.log(`A chave ${chave} tem o valor de ${cliente[chave]}`);
  }
}
