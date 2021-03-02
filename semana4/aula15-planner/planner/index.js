let adicionaTarefa = () =>{
const meuInput = document.getElementById("tarefa");
let tarefa = meuInput.value;
const meuDiaDaSemana = document.getElementById("dias-semana");
let diaDaSemana = meuDiaDaSemana.value;

if(tarefa === ""){
    alert("Digite uma tarefa!");
}


switch(diaDaSemana){
    case 'segunda':
        segunda.innerHTML += `<div class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'terca':
        terca.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'quarta':
        quarta.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'quinta':
        quinta.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'sexta':
        sexta.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'sabado':
        sabado.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    case 'domingo':
        domingo.innerHTML += `<div  class="tarefa-individual" onclick="riscarTarefa()">${tarefa} </div>`;
        meuInput.value = "";
        break;
    default:
        
}

/*DESAFIOS */

let riscarTarefa = () =>{

    const tarefaUnica = document.getElementById("tarefa-individual");
    tarefaUnica.innerHTML= "bUFA"

}
}
adicionaTarefa();