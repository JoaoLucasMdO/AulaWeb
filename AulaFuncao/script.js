document.querySelector("#btnCriar").addEventListener("click", criar)
var id = 1
function criar(){
    var titulo = document.createElement("h1")
    titulo.innerText = "Criado"
    var x = "tit" + id
    titulo.setAttribute("id", x)
    document.body.appendChild(titulo)
    id++
}

var variavel = document.querySelector("#btnCriar")
variavel.addEventListener("click", function(){
    var titulo = document.createElement("h1")
    titulo.innerText = "Criado"
    var x = "tit" + id
    titulo.setAttribute("id", x)
    document.body.appendChild(titulo)
    id++
})