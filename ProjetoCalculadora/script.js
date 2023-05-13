let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

function somar(){
    let result = Number(n1.value) + Number(n2.value)
    document.getElementById("r").innerHTML = result
}

function dividir(){
    let result = Number(n1.value) / Number(n2.value)
    document.getElementById("r").innerHTML = result
}

