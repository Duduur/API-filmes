'use strict'

async function loadGallery () {
    const home = document.getElementById('home')
    const url = 'https://api.sampleapis.com/movies/animation'
    
    const response = await  fetch(url)
    const animacoes = await response.json()

    animacoes.forEach (animacoes =>{
        const img = document.createElement('img')
        img.src = animacoes.posterURL

        home.appendChild(img)
    })
    
}
loadGallery()