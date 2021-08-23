import BotaoConclui from "./assets/scripts/componentes/concluiTarefa.js";
import BotaoDeleta from "./assets/scripts/componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
evento.preventDefault();

const lista = document.querySelector('[data-list');

const input = document.querySelector('[data-form-input]');
const valorInput = input.value
console.log(valorInput);

const tarefa = document.createElement('li');
tarefa.classList.add('task');
const conteudo = `<p class="content"> ${valorInput}</p>`;
tarefa.innerHTML = conteudo;
tarefa.appendChild(BotaoConclui());
tarefa.appendChild(BotaoDeleta());
lista.appendChild(tarefa)

input.value = "";
};

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);