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
    apartamento: false,
    complemento: 'casa amarela',
  },
];
cliente.enderecos.push({
  rua: 'R Emilio Romano',
  numero: 229,
  apartamento: true,
  complemento: 'apto 32',
});
const listaApartamentos = cliente.enderecos.filter(
  (qualquernome) => qualquernome.apartamento === true
);

console.log(listaApartamentos);
