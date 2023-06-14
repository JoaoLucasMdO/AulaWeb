document.querySelector("#calcular").addEventListener("click", function(){
    n1 = parseFloat(document.querySelector("input[type='radio']:checked").value)
    n2 = parseFloat(document.querySelector("#qtd").value)
    var adic = document.querySelectorAll("input[name='adicionais']:checked")
    adicionais = 0

    if(n2 <= 2){
        desc = 5
    }

    else{
        desc = 10
    }

    for(var i = 0; i < adic.length; i++){
        adicionais += parseFloat(adic[i].value)
    }

    var total = (n1 * n2) + adicionais
    desconto = (total * desc) / 100
    totdescon = total - desconto

    
     
     

document.querySelector("#total").innerHTML = `Total:${total}`
document.querySelector("#desconto").innerHTML = `Desconto:${desconto}`
document.querySelector("#totdesc").innerHTML = `Total com desconto:${totdescon}`
})


