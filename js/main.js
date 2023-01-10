const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./image/aprovado.png" alt="imoje-festejando">';
const imgReprovado = '<img src="./image/reprovado.png" alt="decepcionado">';
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualiaTabela();
    atualizaMediaFinal();
     
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
    
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';
    
        linhas += linha;

    }

   

 //let linha = '<tr>' +  `<td>${inputNomeAtividade}</td>` + `<td>${inputNotaAtividade}</td>` + `<td>${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>` + `</tr>`;
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualiaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaMediaFinal(){
   const mediaFinal = calcularMediaFinal();
   document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
   document.getElementById('media-final-resutado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


   
}
function calcularMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

}