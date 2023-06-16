const cliente = {
  nome: 'Willian',
  idade: 35,
  email: 'will@firma.com',
  telefone: ['1155555550', '4435526666'],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente');
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);
