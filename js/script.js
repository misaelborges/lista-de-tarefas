let botao = document.querySelector('#botao')
let msg = 'aberto'

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
        situacao: msg
    }
    return atividade
}

function criarTr(atividade) {
    let atividadeTr = document.createElement('tr')
    atividadeTr.classList.add('linhas')

    atividadeTr.appendChild(criarTd(atividade.nome, 'info-nome'))
    atividadeTr.appendChild(criarTd(atividade.hora, 'info-hora'))
    atividadeTr.appendChild(criarTd(atividade.situacao, 'info-situacao'))

    return atividadeTr
}

function criarTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

let tabela = document.querySelector('#tabela')
    tabela.addEventListener('click', function(event){
        let alvo = event.target
        let paiAlvo = alvo.parentNode
        paiAlvo.style.background='#ccc'
        paiAlvo.select()
    })


let btnConcluir = document.querySelector('#concluir')
btnConcluir.addEventListener('click', function(){
    let tabela = document.querySelector('#tabela')
    tabela.addEventListener('click', function(event){
        let alvo = event.target
        let paiAlvo = alvo.parentNode
        paiAlvo.style.background='green'
        let td = document.querySelector('.info-situacao')
        td.innerText='Tarefa Concluida'
    })   
})