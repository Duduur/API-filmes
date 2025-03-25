'use strict'

//função de listar as animações
async function pesquisarFilmesAnimacoes(){
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/animation"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(anime => {
        const card = document.createElement('div')
        card.className = 'card'

        const imagem = document.createElement('img')
        imagem.src = anime.posterURL 
        imagem.alt = anime.title
        imagem.className = 'imagem'

        const titulo = document.createElement('p')
        titulo.textContent = anime.title
        titulo.className = 'titulo-card'

        card.addEventListener('click', () => abrirModal(anime))

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)

       
    })
}
function animation(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo2'
    titulo.textContent = 'ANIMAÇÃO'


    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarFilmesAnimacoes()
}

// Crie a tela de filmes classicos
async function pesquisarClassico() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/classic"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card2'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem2'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card2'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}
function classic(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela3"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo3'
    titulo.textContent = 'CLÁSSICO'


    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarClassico()
}

// Crie a tela de filmes Comedia
async function pesquisarComedia() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/comedy"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card3'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem3'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card3'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}
function comedia(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela4"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo4'
    titulo.textContent = 'COMÉDIA'


    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarComedia()
}

//Cria a tela de filmes de drama
async function pesquisarDRAMA() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/drama"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card4'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem4'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card4'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}

function drama(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela5"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo5'
    titulo.textContent = 'DRAMA'

    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarDRAMA()
}

//Criar a tela de filmes de Terror
async function pesquisarTerror() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/horror"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card5'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem5'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card5'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}

function terror(){
    const main = document.getElementById('main')
    main.replaceChildren

    const tela = document.createElement('div')
    tela.id = "tela6"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo6'
    titulo.textContent = 'TERROR'

    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarTerror()
}

//Criar a tela de  Familia
async function pesquisarFamilia() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/family"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card6'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem6'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card6'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}
function familia(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela7"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo7'
    titulo.textContent = 'FAMILIA'

    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarFamilia()
}

//Criar a tela de  Familia
async function pesquisarMisterio() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/mystery"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card6'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem6'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card6'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}
function misterio(){
    const main = document.getElementById('main')
    main.innerHTML = ""

    const tela = document.createElement('div')
    tela.id = "tela7"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo7'
    titulo.textContent = 'MISTERIO'

    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarMisterio()
}

// Criar tela de Cientifico
async function pesquisarCientifico() {
    const container = document.getElementById('container') 
    const url = "https://api.sampleapis.com/movies/scifi-fantasy"

    const response = await fetch(url)
    const dados = await response.json()

    dados.forEach(classico => {
        const card = document.createElement('div')
        card.className = 'card6'

        const imagem = document.createElement('img')
        imagem.src = classico.posterURL 
        imagem.alt = classico.title
        imagem.className = 'imagem6'

        const titulo = document.createElement('p')
        titulo.textContent = classico.title
        titulo.className = 'titulo-card6'

        card.appendChild(imagem)
        card.appendChild(titulo)
        container.appendChild(card)
    })
}
function Cientifico(){
    const main = document.getElementById('main')
    main.replaceChildren()

    const tela = document.createElement('div')
    tela.id = "tela7"

    const titulo = document.createElement('h1')
    titulo.className = 'Titulo7'
    titulo.textContent = 'MISTERIO'

    const container = document.createElement('div')
    container.id = "container"

    tela.appendChild(titulo)
    tela.appendChild(container)
    main.appendChild(tela)

    pesquisarCientifico()
}

function pesquisar(valor){
    let dados = String(valor).toLowerCase()
    
    if (dados == "animacao"){
        return animation()
    } else if(dados == "classico"){
        return classic()
    } else if( dados == "comedia"){
        return comedia()
    }else if(dados == "drama"){
         return drama()
    } else if(dados == "terror"){
        return terror()
    }else if(dados == "familia"){
        return familia()
    }else if(dados == "misterio"){
        return familia()
    }else if(dados == "cientifico"){
        return Cientifico()
    }else{
        return "Dados incorretos"
    }
   
    
}

const filme = document.getElementById('filme'); // Pegando o input corretamente

filme.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const valorDigitado = filme.value.trim(); // Pegando o valor do input e removendo espaços extras
        if (valorDigitado !== '') { // Evita pesquisas vazias
            pesquisar(valorDigitado); // Chamando a função e passando o valor digitado
        }
    }
});

document.getElementById('animacoes').addEventListener('click', animation)
document.getElementById('classics').addEventListener('click',classic)
document.getElementById('comedia').addEventListener('click',comedia)
document.getElementById('drama').addEventListener('click',drama)
document.getElementById('horror').addEventListener('click',terror)
document.getElementById('familia').addEventListener('click',familia)
document.getElementById('familia').addEventListener('click',familia)
document.getElementById('cientifico').addEventListener('click',Cientifico)
