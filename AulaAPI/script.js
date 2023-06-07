document.getElementById("pesquisaCep").addEventListener('click', PesquisarCep, function(){})

async function PesquisarCep(){
    let cep = document.getElementById('cep').value

    const apiViaCep = 'https://viacep.com.br/ws/' + cep + '/json/'

    const resCep = await fetch(apiViaCep)
    const data = await resCep.json()
    
    
    
    if(data.erro == true){
        alert("Cep Inválido")
    }
    else{
        document.getElementById("rua").value = `${data.logradouro} ${data.bairro} ${data.localidade} ${data.uf}`
    }
}


apiKey = "f5a9ef7ff1601a2fbccbee0b13fc0c2e";
apiBDImagemUnsplash = "https://source.unsplash.com/1600x900/?";
apiBandeiraPais = "https://flagsapi.com/BE/flat/64.png"
tempElement = document.querySelector("#temperatura");
climaIconElement = document.querySelector("#clima-icon");
dadosTemp = document.querySelector(".dadosTemperatura")
dadosLog = document.querySelector(".dadosLogradouro")
 
//const verificarClimaBtn = document.querySelector("#verificarClima");
document.querySelector("#verificarClima").addEventListener("click", async (e) => {
  e.preventDefault();
  dadosTemp.style.display = "block"
  let cidade = document.querySelector("input[name='cidade']").value
  const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
  
  const res = await fetch(apiClimaURL);
  const data = await res.json();
  if (data.cod === "404") {
    alert("Cidade Inválida")
    return;
  }
 
  temperatura.innerText = parseFloat(data.main.temp)+ "º"; //&deg;C
  humidade.innerText = parseFloat(data.main.humidity)+ "%" 
  vento.innerText = parseFloat(data.wind.speed)+ "km/h" 
  tempo.innerText = data.weather[0].description; 
  document.getElementById("cidadeTemp").innerText = cidade;
  document.getElementById("icone").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
  document.getElementById("imgPais").setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
  document.getElementById('imgCidade').setAttribute('src', apiBDImagemUnsplash+cidade);
});
  // document.body.style.backgroundImage = `url("${apiUnsplash + cidade}")`;
 
function Limpar()
{
    var confResp = window.confirm("Tem certeza que deseja limpar?") 
    if (confResp == true)
    {
        document.getElementById("idFormulario").reset()
        dadosLog.style.display = "none"
        dadosTemp.style.display = "none"
    }
    else
        window.alert("Operação Cancelada")
}