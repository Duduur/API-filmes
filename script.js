'use strict'




async function pesquisarFilmesPeloTema(){
    const url = "https://api.sampleapis.com/movies/animation"

    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

function animation(){
    const body = document.createElement('div')
    const main = document.getElementById('main')
    const titulo = document.createElement('h1')

    main.innerHTML = ""

    body.className = "tela"
    body.style.backgroundColor = "green"

    titulo.id = "titulo"
    titulo.textContent = 'ANIMAÇÃO'

    body.appendChild(titulo)

    main.appendChild(body)

    

}

document.getElementById('animacoes').addEventListener('click', animation)