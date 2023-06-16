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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes('enderecos')) {
  console.error('Erro. É necessário ter um endereço cadastrado.');
}
