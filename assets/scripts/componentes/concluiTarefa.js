const BotaoConclui = () => {
    const botaoConclusao = document.createElement('button');
    botaoConclusao.classList.add('check-button');
    botaoConclusao.innerText = 'concluir';
    
    botaoConclusao.addEventListener('click', concluirTarefa);
    
    return botaoConclusao;
};

const concluirTarefa = (evento) => {
    const botaoConclusao = evento.target;

    const tarefaConcluida = botaoConclusao.parentElement

    tarefaConcluida.classList.toggle('done');
};  

export default BotaoConclui