const pessoa = {
  nome: 'Willian',
  profissão: 'Engenheiro',
};

console.log(pessoa.nome);

pessoa.telefone = '11 22233444';

console.log(pessoa.telefone);

(pessoa.nome = 'Andrea Assis'), console.log(pessoa);
