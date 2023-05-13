function imprimir(){
    if (document.getElementById("nome").value == ""){
      var n = window.prompt("Digite seu nome")
      document.getElementById("nome").value = n
    }
    window.print()
}

function limpar(){
    if(window.confirm("Você tem certeza?") == true){
        document.querySelector("#formulario").reset()
    }   
}

function relogio(){
    var hora = new Date()
    var horaAt = hora.getHours()
    var minu = hora.getMinutes()
    var seg = hora.getSeconds()
    document.getElementById("hora").innerText = `${horaAt}:${minu}:${seg}`
}
setInterval(relogio, 1000)

function orcar(){
    var somaad = 0
    var adic = document.querySelectorAll("input[name='adicionais']:checked")

    for(var i = 0; i < adic.length; i++){
        somaad += Number(adic[i].value)
    }
    var des = Number(document.getElementById("destino").value)
    var gui = Number(document.querySelector("input[name='guia']:checked").value)
    var total = somaad + des + gui
    document.querySelector("#total").innerHTML = total
}
