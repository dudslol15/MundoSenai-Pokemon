let frm = document.querySelector("form")
let saidaKanto = document.getElementById("regiaoKanto")
let saidaPokeKanto = document.getElementById("pokeKanto")
let saidaJohto = document.getElementById("regiaoJohto")
let saidaPokeJohto = document.getElementById("pokeJohto")
let saidaHoenn = document.getElementById("regiaoHoenn")
let saidaPokeHoenn = document.getElementById("pokeHoenn")
let saidaSinoh = document.getElementById("regiaoSinoh")
let saidaPokeSinoh = document.getElementById("pokeSinoh")
let saidaUnova = document.getElementById("regiaoUnova")
let saidaPokeUnova = document.getElementById("pokeUnova")
let saidaKalos = document.getElementById("regiaoKalos")
let saidaPokeKalos = document.getElementById("pokeKalos")
let saidaFav = document.querySelector("#fav")

frm.addEventListener("click", (e) => {
  //previne o envio do Formulario
  e.preventDefault()

  //Vetores e subvetores para definir cada geração pokémon:
  let geracao = [[], [], [], [], [], []]

  //Laço de repetição que pergunta os nomes dos Pokémon encontrados:
  for (let numRegiao = 0; numRegiao < 6; numRegiao++) {
    while (true) {
      let pokemon = prompt(`Digite o Pokémon encontrado na geração ${numRegiao + 1}.`)

      //Condicional para seguir para a próxima geração ou colocar no subvetor o nome do Pokémon:
      if (pokemon.toUpperCase() === `NEXT`) {
        break
      } else geracao[numRegiao].push(pokemon)
    }
  }

  //Impressão dos pokemon da região de Kanto
  saidaKanto.innerHTML = `Os Pokémon encontrados em Kanto são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[0]) {
    saidaPokeKanto.innerText += `${pokes}, `
  }
  //Impressão dos pokemon da região de Johto
  saidaJohto.innerHTML = `Os Pokémon encontrados em Johto são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[1]) {
    saidaPokeJohto.innerText += `${pokes}, `
  }
  //Impressão dos pokemon da região de Hoenn
  saidaHoenn.innerHTML = `Os Pokémon encontrados em Hoenn são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[2]) {
    saidaPokeHoenn.innerText += `${pokes}, `
  }
  //Impressão dos pokemon da região de Sinoh
  saidaSinoh.innerHTML = `Os Pokémon encontrados em Sinoh são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[3]) {
    saidaPokeSinoh.innerText += `${pokes}, `
  }
  //Impressão dos pokemon da região de Unova
  saidaUnova.innerHTML = `Os Pokémon encontrados em Unova são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[4]) {
    saidaPokeUnova.innerText += `${pokes}, `
  }
  //Impressão dos pokemon da região de Kalos
  saidaKalos.innerHTML = `Os Pokémon encontrados em Kalos são:` + "<br>"
  //Laço de repetição para mostrar todos os Pokémon encontrados
  for (const pokes of geracao[5]) {
    saidaPokeKalos.innerText += `${pokes}, `
  }

  //Descontração final com uma condicional para saber o seu Pokémon Lendário favorito
  let fav = prompt("Qual seu Pokemon Lendário favorito?")

  if (fav.toUpperCase() !== "KYOGRE") {
    saidaFav.innerHTML = `Seu Lendário favorito é ${fav}? Péssima escolha...`
  } else {
    saidaFav.innerHTML = `Você é uma pessoa de cultura escolhendo o Kyogre!`
  }
})