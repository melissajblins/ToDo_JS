const BotaoDeleta = () => {
    const botaoDelecao = document.createElement('button');
    botaoDelecao.classList.add('delete-button');
    botaoDelecao.innerText = 'deletar';

    botaoDelecao.addEventListener('click', deletarTarefa);

    return botaoDelecao;
};

const deletarTarefa = (evento) => {
    const botaoDelecao = evento.target;

    const tarefaDeletar = botaoDelecao.parentElement;

    tarefaDeletar.remove();
};

export default BotaoDeleta