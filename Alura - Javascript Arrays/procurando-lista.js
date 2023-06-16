const alunos = ['Willian', 'João', 'Andrea'];
const medias = [10, 8, 7];

const listaAlunos = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaAlunos[0].includes(aluno)) {
    const indice = listaAlunos[0].indexOf(aluno);
    const mediaDoAluno = listaAlunos[1][indice];
    console.log(
      `O aluno ${aluno} está cadastrado, e sua média é ${mediaDoAluno}`
    );
  } else {
    console.log('Aluno não encontrado!');
  }
}
exibeNomeENota('Willian');
// function alunoPresente(aluno) {
//   if (aluno || [alunos]) {
//     console.log('Esta na lista');
//   } else console.log('Aluno não encontrado');
// }

// alunoPresente('Marcio');
