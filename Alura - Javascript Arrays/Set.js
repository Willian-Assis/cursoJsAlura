const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const meuSet = new Set([1, 1, 2, 3, 4, 4]);

const novoSet = new Set(nomes);

const nomesAtualizados = [...novoSet];

console.log(nomesAtualizados);
