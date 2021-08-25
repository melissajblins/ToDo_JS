import { novoItem } from "./assets/scripts/componentes/criaTarefa.js";
import { carregaTarefa } from "./assets/scripts/componentes/carregaTarefa.js";

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', novoItem);

carregaTarefa();