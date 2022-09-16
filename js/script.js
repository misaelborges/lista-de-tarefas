let botao = document.querySelector('#botao')
botao.addEventListener('click', function(){
    let formulario = document.querySelector('#form-atividade')

    let nome = formulario.nome.value 

    if (nome == "") {
        window.alert('campo em branco')
    } else {
        let atividadeTr = document.createElement('tr')

        let atividadeTd = document.createElement('td')

        atividadeTd.textContent = nome

        atividadeTr.appendChild(atividadeTd)

        let tabela = document.querySelector('#compromisso')

        tabela.appendChild(atividadeTr)
    }    
})