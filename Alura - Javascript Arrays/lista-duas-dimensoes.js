const alunos = ['Willian', 'João', 'Maria', 'Caio'];
const medias = [10, 8, 6, 7];

const listaFinal = [alunos, medias];

console.log(
  `O aluno na posição 2 é ${[listaFinal[0][2]]}, e sua média final é ${
    listaFinal[1][2]
  }`
);

const sala1 = ['Will', 'Joao', 'Fabiano'];
const sala2 = ['Andrea', 'Juliana', 'Maria'];

const juntarListas = sala1.concat(sala2);
console.log(juntarListas);
