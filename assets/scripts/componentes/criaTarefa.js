import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

export const novoItem = (evento) => {
    evento.preventDefault();
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[];

    const input = document.querySelector('[data-form-input]');
    const valorInput = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const horario = data.format('HH:mm');

    const concluida = false

    const dados = {
        valorInput,
        dataFormatada,
        horario,
        concluida
    };

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = "";

    carregaTarefa();
};

export const Tarefa = ({valorInput, horario, concluida}, id) => { 
    const tarefa = document.createElement('li');
    
    const conteudo = `<p class="content"> ${horario} - ${valorInput}</p>`;

    if (concluida){
        tarefa.classList.add('done');
    };

    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));
    return tarefa;
    
};