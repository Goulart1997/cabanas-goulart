const hdr = document.querySelector("form")
const foto = document.querySelector("#fotocabana")
const bt = document.querySelector(".final")
const dia = document.querySelector("#diasreservado")
const diaria = document.querySelector("#diaria")
const valor = document.querySelector("#valor")

let preco = 150

hdr.cabana.addEventListener("change", () => {
    if (hdr.cabana.value == "fto"){
        foto.src = "cabana 1.jpg"
        preco = 150
    } else if (hdr.cabana.value == "fst") {
        foto.src = "cabana 2.jpg"
        preco = 200
    } else if (hdr.cabana.value == "fsi") {
        foto.src = "cabana 3.jpg"
        preco = 250
    }
   
})

function alerta() {
    alert("Selecione quantos dias ira ficar...")
}

hdr.addEventListener("submit", (e) => {
    e.preventDefault()
    const total = preco * dia.value
    valor.innerText = total.toLocaleString("pt-br", {minimumFractionDigits: 2}) 
    console.log(total)  
    diaria.innerText = preco.toLocaleString("pt-br", {minimumFractionDigits: 2}) 
})


