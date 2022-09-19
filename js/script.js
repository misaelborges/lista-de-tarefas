let botao = document.querySelector('#botao')

botao.addEventListener('click', function(){

    let formulario = document.querySelector('#form-atividade')

    let atividade = listaTarefas(formulario)

    if (atividade.nome == "") {
        window.alert('campo em branco')
    } else {
        let atividadeTr = criarTr(atividade)

        let tabela = document.querySelector('#compromisso')

        tabela.appendChild(atividadeTr)

        formulario.reset()
    }    
})

function listaTarefas(dados) {
    let atividade = {
        nome: dados.nome.value, 
        hora: dados.hora.value,
        situacao: criarBotao()
    }
    return atividade
}

function criarTr(atividade) {
    let atividadeTr = document.createElement('tr')

    atividadeTr.appendChild(criarTd(atividade.nome))
    atividadeTr.appendChild(criarTd(atividade.hora))
    atividadeTr.appendChild(criarTd(atividade.situacao))

    return atividadeTr
}

function criarTd(dado) {
    var td = document.createElement('td')
    td.textContent = dado

    return td
}

function criarBotao() {
    let botao = {
        btnConcluir: document.createElement('input'),
        btnAdiar: document.createElement('input'),
        btnExcluir: document.createElement('input')
    }
    return botao
}