const BotaoConclui = (atualiza, id) => {
    const botaoConclusao = document.createElement('button');
    botaoConclusao.classList.add('check-button');
    botaoConclusao.innerText = 'concluir';
    
    botaoConclusao.addEventListener('click', () => concluirTarefa(atualiza, id));
    
    return botaoConclusao;
};

const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
};  

export default BotaoConclui