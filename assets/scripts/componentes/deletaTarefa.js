const BotaoDeleta = (atualiza, id   ) => {
    const botaoDelecao = document.createElement('button');
    botaoDelecao.classList.add('delete-button');
    botaoDelecao.innerText = 'deletar';

    botaoDelecao.addEventListener('click', () => deletarTarefa(atualiza, id));

    return botaoDelecao;
};

const deletarTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(id, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
};

export default BotaoDeleta