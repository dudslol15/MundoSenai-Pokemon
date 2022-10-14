let form = document.querySelector("#form")
var inPoke = document.getElementById("#inPoke")
let inAd = document.getElementById("#inAd")
let inNext = document.getElementById("#inNext")
let inDex = document.getElementById("#inDex")
let resp = document.querySelector("h3")

let pokedex = [[],[],[],[],[],[],[]]

form.addEventListener("click", (e) => {
    e.preventDefault()

    const poke = inPoke.value
    resp.innerText = `Pokémon: ${poke}`

})