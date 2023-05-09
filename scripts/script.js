const idPersonagens = document.getElementById('idPersonagens')
const idPlanetas = document.getElementById('idPlanetas')
const idNaves = document.getElementById('idNaves')
const idFilmes = document.getElementById('idFilmes')

idPersonagens.addEventListener('click', () => {

  const inf_retrato = document.querySelector('.inf_retrato')
  const tempoVisivel = 5000

  const escondeElemento = () => {
    inf_retrato.style.display = 'none'
  }

  inf_retrato.style.display = 'block'

  setTimeout(escondeElemento, tempoVisivel)


  async function renderizaCards() {
    const lista = document.querySelector('#cardList')
  
    lista.innerHTML = ""
  
    const listaDeDados = await fetch('https://swapi.dev/api/people', {
      method: "GET"
    })
    .then( (resposta) => {
      return resposta.json()
    })
  
    for(let indice = 0; indice < listaDeDados.results.length; indice++) {
      const elemento = listaDeDados.results[indice]
  
      const li = document.createElement("li")
      const divFrente = document.createElement('div')
      const divVerso = document.createElement('div')
      const divNomeFrente = document.createElement('div')
      const divNomeVerso = document.createElement('div')
      const listaDados = document.createElement('ul')
      const anoNasc = document.createElement('li')
      const planeta = document.createElement('li')
      const imagem = document.createElement('img')
  
      li.classList.add('card', 'listCard')
      divFrente.classList.add("face", "front");
  
      divNomeFrente.classList.add("titleCard")
      divNomeFrente.innerText = elemento.name
  
      divNomeVerso.classList.add("titleCard")
      divNomeVerso.innerText = elemento.name
  
      listaDados.classList.add("cardData")
  
      anoNasc.innerText = `Ano de Nascimento: ${elemento.birth_year}`
      
  
      const nomePlaneta = await fetch(elemento.homeworld, {
        method: "GET"
      })
      .then( (resposta) => {
        return resposta.json()
      })
  
      planeta.innerText = `Planeta: ${nomePlaneta.name}`
  
      divVerso.classList.add('face', 'back')
  
      imagem.src = "./assets/starduck.png"
      imagem.alt = "starduck"
  
      listaDados.append(anoNasc, planeta)
      divFrente.append(divNomeFrente, listaDados)
      divVerso.append(divNomeVerso, imagem)
      li.append(divFrente, divVerso)
      lista.append(li)
    }
    viraCard()
  }
  renderizaCards()

})


idPlanetas.addEventListener('click', () => {
 
  const inf_retrato = document.querySelector('.inf_retrato')
  const tempoVisivel = 5000

  const escondeElemento = () => {
    inf_retrato.style.display = 'none'
  }

  inf_retrato.style.display = 'block'

  setTimeout(escondeElemento, tempoVisivel)

  async function renderizaCards() {
    const lista = document.querySelector('#cardList')
  
    lista.innerHTML = ""
  
    const listaDeDadosPlanetas = await fetch('https://swapi.dev/api/planets', {
      method: "GET"
    })
    .then( (resposta) => {
      return resposta.json()
    })
  
    for(let indice = 0; indice < listaDeDadosPlanetas.results.length; indice++) {
      const elemento = listaDeDadosPlanetas.results[indice]
  
      const li = document.createElement("li")
      const divFrente = document.createElement('div')
      const divVerso = document.createElement('div')
      const divNomeFrente = document.createElement('div')
      const divNomeVerso = document.createElement('div')
      const listaDados = document.createElement('ul')
      const anoNasc = document.createElement('li')
      const planeta = document.createElement('li')
      const imagem = document.createElement('img')
  
      li.classList.add('card', 'listCard')
      divFrente.classList.add("face", "front");
  
      divNomeFrente.classList.add("titleCard")
      divNomeFrente.innerText = elemento.name
  
      divNomeVerso.classList.add("titleCard")
      divNomeVerso.innerText = elemento.name
  
      listaDados.classList.add("cardData")
  
      planeta.innerText = `Planeta: ${elemento.name}`

      anoNasc.innerText = `População : ${elemento.population}`
  
      divVerso.classList.add('face', 'back')
  
      imagem.src = "./assets/starduck.png"
      imagem.alt = "starduck"
  
      listaDados.append(anoNasc, planeta)
      divFrente.append(divNomeFrente, listaDados)
      divVerso.append(divNomeVerso, imagem)
      li.append(divFrente, divVerso)
      lista.append(li)
    }
    viraCard()
  }
  renderizaCards()
})


idNaves.addEventListener('click', () => {
 
  const inf_retrato = document.querySelector('.inf_retrato')
  const tempoVisivel = 5000

  const escondeElemento = () => {
    inf_retrato.style.display = 'none'
  }

  inf_retrato.style.display = 'block'

  setTimeout(escondeElemento, tempoVisivel)

  async function renderizaCards() {
    const lista = document.querySelector('#cardList')
  
    lista.innerHTML = ""
  
    const listaDeDadosPlanetas = await fetch('https://swapi.dev/api/vehicles/', {
      method: "GET"
    })
    .then( (resposta) => {
      return resposta.json()
    })
  
    for(let indice = 0; indice < listaDeDadosPlanetas.results.length; indice++) {
      const elemento = listaDeDadosPlanetas.results[indice]
  
      const li = document.createElement("li")
      const divFrente = document.createElement('div')
      const divVerso = document.createElement('div')
      const divNomeFrente = document.createElement('div')
      const divNomeVerso = document.createElement('div')
      const listaDados = document.createElement('ul')
      const anoNasc = document.createElement('li')
      const planeta = document.createElement('li')
      const imagem = document.createElement('img')
  
      li.classList.add('card', 'listCard')
      divFrente.classList.add("face", "front");
  
      divNomeFrente.classList.add("titleCard")
      divNomeFrente.innerText = elemento.name
  
      divNomeVerso.classList.add("titleCard")
      divNomeVerso.innerText = elemento.name
      
      //informações

      listaDados.classList.add("cardData")
  
      planeta.innerText = `Passangeiros: ${elemento.passengers}`

      anoNasc.innerText = `Classe do veiculo : ${elemento.vehicle_class}`
  
      divVerso.classList.add('face', 'back')
  
      imagem.src = "./assets/starduck.png"
      imagem.alt = "starduck"
  
      listaDados.append(anoNasc, planeta)
      divFrente.append(divNomeFrente, listaDados)
      divVerso.append(divNomeVerso, imagem)
      li.append(divFrente, divVerso)
      lista.append(li)
    }
    viraCard()
  }
  renderizaCards()
})


idFilmes.addEventListener('click', () => {
 
  const inf_retrato = document.querySelector('.inf_retrato')
  const tempoVisivel = 5000

  const escondeElemento = () => {
    inf_retrato.style.display = 'none'
  }

  inf_retrato.style.display = 'block'

  setTimeout(escondeElemento, tempoVisivel)

  async function renderizaCards() {
    const lista = document.querySelector('#cardList')
  
    lista.innerHTML = ""
  
    const listaDeDadosPlanetas = await fetch('https://swapi.dev/api/films/', {
      method: "GET"
    })
    .then( (resposta) => {
      return resposta.json()
    })
  
    for(let indice = 0; indice < listaDeDadosPlanetas.results.length; indice++) {
      const elemento = listaDeDadosPlanetas.results[indice]
  
      const li = document.createElement("li")
      const divFrente = document.createElement('div')
      const divVerso = document.createElement('div')
      const divNomeFrente = document.createElement('div')
      const divNomeVerso = document.createElement('div')
      const listaDados = document.createElement('ul')
      const anoNasc = document.createElement('li')
      const planeta = document.createElement('li')
      const imagem = document.createElement('img')
  
      li.classList.add('card', 'listCard')
      divFrente.classList.add("face", "front");
  
      divNomeFrente.classList.add("titleCard")
      divNomeFrente.innerText = elemento.title
  
      divNomeVerso.classList.add("titleCard")
      divNomeVerso.innerText = elemento.title
      
      //informações

      listaDados.classList.add("cardData")
  
      planeta.innerText = `Episodio: ${elemento.episode_id}`

      anoNasc.innerText = `Data de lançamento : ${elemento.release_date}`
  
      divVerso.classList.add('face', 'back')
  
      imagem.src = "./assets/starduck.png"
      imagem.alt = "starduck"
  
      listaDados.append(anoNasc, planeta)
      divFrente.append(divNomeFrente, listaDados)
      divVerso.append(divNomeVerso, imagem)
      li.append(divFrente, divVerso)
      lista.append(li)
    }
    viraCard()
  }
  renderizaCards()
})



function viraCard() {
  const cards = document.querySelectorAll('.listCard')

  for(let indice = 0; indice < cards.length; indice++) {
    const card = cards[indice]

    card.addEventListener('click', () => {
      card.classList.toggle('flip')
    })
  }
}