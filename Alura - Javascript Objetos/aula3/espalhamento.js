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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};
console.log(encomenda);
