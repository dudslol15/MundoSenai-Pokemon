let form = document.querySelector("#form")
let inPoke = document.getElementById("#inPoke")
let inAd = document.getElementById("#inAd")
let inNext = document.getElementById("#inNext")
let inDex = document.getElementById("#inDex")
let resp = document.querySelector("h3")

let pokedex = [[],[],[],[],[],[],[]]

form.addEventListener("click", (e) => {
    e.preventDefault()

    let poke = inPoke.value
    resp.innerText = `Pokémon: ${poke}`

})