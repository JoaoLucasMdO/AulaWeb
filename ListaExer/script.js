document.querySelector("#btn1").addEventListener("click", function(){
    num1 = Number(document.querySelector("#num1").value)
    num2 = Number(document.querySelector("#num2").value)
    resultado = (num1 + num2)/2
    document.querySelector("#resultado").innerHTML = resultado
})

