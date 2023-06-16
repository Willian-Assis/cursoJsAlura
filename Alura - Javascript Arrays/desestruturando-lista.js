const alunos = ['Willian', 'João', 'Andrea'];
const medias = [10, 8, 7];

const listaAlunos = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaAlunos[0].includes(aluno)) {
    const [alunos, medias] = listaAlunos; // ele pega os arrays de dentro da lista e transforma em const.

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];
    console.log(
      `O aluno ${aluno} está cadastrado, e sua média é ${mediaDoAluno}`
    );
  } else {
    console.log('Aluno não encontrado!');
  }
}
exibeNomeENota('João');
// function alunoPresente(aluno) {
//   if (aluno || [alunos]) {
//     console.log('Esta na lista');
//   } else console.log('Aluno não encontrado');
// }

// alunoPresente('Marcio');
