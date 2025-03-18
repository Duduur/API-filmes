'use strict'

async function pesquisarFilmesAnimacoes(){
    const home = document.getElementById('tela')
    const url = "https://api.sampleapis.com/movies/animation"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(anime =>{
        const posterURL = document.createElement('img')
        posterURL.src = anime.url

        home.appendChild(posterURL)
    })
    return dados
}

function animation(){
    const body = document.createElement('div')
    const main = document.getElementById('main')
    const titulo = document.createElement('h1')

    main.innerHTML = ""

    body.className = "tela"
    body.style.background = "linear-gradient(to top, #ADD8E6, #87CEEB, #4682B4 , #1E3A5F , #0A192F)";

    titulo.id = "titulo"
    titulo.textContent = 'ANIMAÇÃO'

    body.appendChild(titulo)

    main.appendChild(body)

    

}

document.getElementById('animacoes').addEventListener('click', animation)