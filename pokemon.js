let regiao = [[], [], [], [], [], [], []]

for (let poke = 0; poke < 7; poke++) {
  while (true) {
    let pokemon = prompt(`Digite o pokemon encontrado de geração ${poke + 1}.
     Digite 'next' para pular para a próxima Geração.`)

    if (pokemon.toUpperCase() === `NEXT`) {
      break
    } else regiao[poke].push(pokemon)
  }
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

  for (let numPoke = 0; regiao[poke][numPoke] !== undefined; numPoke++)
    console.log(`${regiao[poke][numPoke]}`)
}
let fav = prompt("Qual seu Pokemon favorito?")

if (fav !== "Kyogre"){
  console.log(`Seu Pokémon favorito é ${fav}? Péssima escolha...`)
}else {
  console.log("Você é uma pessoa de cultura escolhendo o Kyogre!")
}