document.querySelector("#btn1").addEventListener("click", function(){
    num1 = Number(document.querySelector("#num1").value)
    num2 = Number(document.querySelector("#num2").value)
    resultado = (num1 + num2)/2
    document.querySelector("#resultado1").innerHTML = resultado
})

document.querySelector("#btn2").addEventListener("click", function(){
    x = Number(window.prompt("Digite o x:"))
    y = Number(window.prompt("Digite o y:"))
    resultado = Math.pow(x,y)
    window.alert("Verifique o console para o resultado")
    console.log(resultado)

})

document.querySelector("#btn3").addEventListener("click", function(){
    n1 = document.querySelector("#n1").value
    n2 = document.querySelector("#n2").value
    n3 = document.querySelector("#n3").value

    let array = [n1,n2,n3]
    minimo = Math.min(...array)
    window.alert(`O minimo é: ${minimo}`)

})

document.querySelector("#btn4").addEventListener("click", function(){
    let dados={ 
        marca:"HP", 
        modelo:"V15",  
        config:{ memoria: 8,  
            processador: "i7" },
          }  
    let {marca, modelo, config:{memoria,processador}} = dados
    window.alert(`O modelo é: ${modelo}, o processador é: ${processador}`)

})

document.querySelector("#btn5").addEventListener("click", function(){
    let dados={ 
        marca:"HP", 
        modelo:"V15",  
        config:{ memoria: 8,  
            processador: "i7" },
          }  
    let {marca, modelo, config:{memoria,processador}} = dados

    const array = Object.values(dados)

    let segundo = array[1]

    window.alert(`O processador é: ${processador}, a marca é ${marca}, o segundo item do array é ${segundo}`)

})

document.querySelector("#btn6").addEventListener("click", function(){
    let dados={ 
        marca:"HP", 
        modelo:"V15",  
        config:{ memoria: 8,  
            processador: "i7" },

        Exibir: function Exibir(){

        window.alert(`O equipamento é um ${this.marca} ${this.config.processador}`)

        }
        }
        dados.Exibir();
})

document.querySelector("#btn7").addEventListener("click", function(){
    let dados = {marca:"HP", 
                    modelo:"V15",  
                    config:{ memoria: 8,  
                    processador: "i7" },
                    }
    let novoEquip = {...dados, valorVenda:"2000", qtdEstoque:"3"}

    window.alert("Verifique o console para ver os dados do novoEquip")

    console.log(novoEquip)
                  
})

document.querySelector("#btn8").addEventListener("click", function(){
    let x =[15,25]
    let y = [12,15,23,43]
    var resultado = 0
    var m = 0
    z = [...x,...y]

    y = y.join("-")

    window.alert(y)
    window.alert("Veja o console para encontrar os valores de z * 5")
    

    for(i in z){
        resultado = z[i] * 5
        console.log(`O ${ m + 1}º valor é: ${resultado}`)
        m += 1
    }

})