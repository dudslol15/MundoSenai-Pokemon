let frm = document.querySelector("form")
let respReg = document.querySelector("#regiao")
let respPoke = document.querySelector("#poke")
let respFav = document.querySelector("#fav")

frm.addEventListener("click", (e) => {
  //previne o envio do Formulario
  e.preventDefault()

  //Vetores e subvetores para definir cada geração pokémon:
  let geracao = [[], [], [], [], [], []]

  //Laço de repetição que pergunta os nomes dos Pokémon encontrados:
  for (let numPoke = 0; numPoke < 6; numPoke++) {
    while (true) {
      let pokemon = prompt(`Digite o Pokémon encontrado na geração ${numPoke + 1}.
     Digite 'next' para ir até a próxima geração.`)

      //Condicional para seguir para a próxima geração ou colocar no subvetor o nome do Pokémon:
      if (pokemon.toUpperCase() === `NEXT`) {
        break
      } else geracao[numPoke].push(pokemon)
    }

    //Condicional que define o nome de cada região baseada em seu Indice Vetorial:
    let regiao
    switch (numPoke) {
      case 0: regiao = "Kanto"; break
      case 1: regiao = "Johto"; break
      case 2: regiao = "Hoenn"; break
      case 3: regiao = "Sinoh"; break
      case 4: regiao = "Unova"; break
      case 5: regiao = "Kalos"; break
    }

    respReg.innerHTML = `Os Pokémon encontrados em ${regiao} são:` + "<br>"

    //Laço de repetição para mostrar todos os Pokémon encontrados
    for (let poke = 0; geracao[numPoke][poke] !== undefined; poke++){
        respPoke.innerHTML = `${geracao[numPoke][poke]}` + "<br>"
      }
    
  }
  //Descontração final com uma condicional para saber o seu Pokémon Lendário favorito
  let fav = prompt("Qual seu Pokemon Lendário favorito?")

  if (fav.toUpperCase() !== "KYOGRE") {
    respFav.innerHTML = `Seu Lendário favorito é ${fav}? Péssima escolha...`
  } else {
    respFav.innerHTML = `Você é uma pessoa de cultura escolhendo o Kyogre!`
  }
})