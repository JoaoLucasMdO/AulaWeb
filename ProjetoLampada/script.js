let img = document.getElementById("lamp")
function ligar(){
    img.setAttribute("src", "img/luzLigada.gif")
    document.getElementById("corp").style.background="white"
    document.getElementById("titulo").style.background="white"
    document.getElementById("titulo").style.color="black"

}


function desligar(){
    img.setAttribute("src", "img/luzDesligada.gif")
    document.getElementById("corp").style.background="black"
    document.getElementById("titulo").style.background="black"
    document.getElementById("titulo").style.color="white"
}


function sumir(){
    img.style.display="none"
    if(img.getAttribute("src") == "img/luzLigada.gif"){
        desligar()
    }
}

function aparecer(){
    img.style.display="block"
    if(img.getAttribute("src") == "img/luzDesligada.gif"){
        ligar()
    }
}