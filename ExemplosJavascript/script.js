document.querySelector("#btn").addEventListener("click", funcoes)
i = 0
function funcoes(){
    /*let dados1 = ["João", "Ronaldo", "Marcos", "Felipe", "Ana"]
    let dados2 = ["Votorantim", "SP", "Capivara"]
    let [cidade, uf, mascote] = dados2

    while(i<dados1.length){
    console.log(dados1[i])
    i++
    }

    console.log(`Cidade é ${cidade}, UF é ${uf}, Mascote é ${mascote}`)

    cidade = "Nova Votorantim"

    console.log(`Cidade é ${cidade}, UF é ${uf}, Mascote é ${mascote}`)

    let objeto = {
        nome:"Gesley",
        endereco:{
            rua:"Rua Votorantim",
            numero:"27",
        },
        esportes:["Natação", "Volei"],

        falar: function falar(){
            console.log(`Meu nome é ${this.nome}`)
        },
    }
    objeto.falar();
    

    let numeros = ["Ana", "Sorocaba", 100, 200, 500]
    let [nome, cidade, ...dividas] = numeros
    console.log(nome)
    console.log(cidade)
    console.log(dividas.join("_"))*/

    registro1 = ["Ana", "Sorocaba", 100, 200, 500]
    registro2 = ["Julia", "200", 15, true]
    let array = [...registro1, ...registro2]
    console.log(array)

    
}

