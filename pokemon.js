//Criação de vetor e subvetores para cada região Pokémon
let regiao = [[], [], [], [], [], [], []]

//Estrutura de Repetição para perguntar o Pokémon encontrado
for (let poke = 0; poke < 7; poke++) {
  while (true) {
    let pokemon = prompt(`Digite o pokemon encontrado de geração ${poke + 1}.
     Digite 'next' para ir até a próxima Geração.`)

//Condiconal para seguir para a próxima geração
    if (pokemon.toUpperCase() === `NEXT`) {
      break
    } else regiao[poke].push(pokemon)
  }

  //Switch criado para definir o nome de cada região baseada em seu índice no vetor
  var geracao
  switch (poke) {
    case 0: geracao = "Kanto"; break
    case 1: geracao = "Johto"; break
    case 2: geracao = "Hoenn"; break
    case 3: geracao = "Sinoh"; break
    case 4: geracao = "Unova"; break
    case 5: geracao = "Kalos"; break
    case 6: geracao = "Alola"; break
  }
  console.log(`Os Pokemon de ${geracao} são:`)

//Estrutura de repetição que irá mostrar todos os Pokémon encontrados em cada geração
  for (let numPoke = 0; regiao[poke][numPoke] !== undefined; numPoke++)
    console.log(`${regiao[poke][numPoke]}`)
}
//Descontração final com uma condicional para saber o seu Pokémon favorito
let fav = prompt("Qual seu Pokemon favorito?")

if (fav !== "Kyogre") {
  console.log(`Seu Pokémon favorito é ${fav}? Péssima escolha...`)
} else {
  console.log("Você é uma pessoa de cultura escolhendo o Kyogre!")
}