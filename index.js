const nome = document.querySelector("#nome")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const res = document.querySelector(".resultado")
const botao = document.querySelector("#btn")


function calcular(){
    const pes = parseFloat(peso.value) 
    const alt = parseFloat(altura.value)/100
    const name = nome.value
    const calc = (pes / (alt * alt)).toFixed(1);

   
if(calc< 18.5){
     res.textContent = `ola, ${name}! seu imc é ${calc} você esta muito magro!`
}else if(calc >= 18.5 && calc <= 24.9){
      res.textContent = `ola, ${name}! seu imc é ${calc} você esta em um peso normal!`
}else if(calc >=25 && calc <= 29.9){
     res.textContent =  `ola, ${name}! seu imc é ${calc} você esta com sobre peso!`
}else if(calc >=30 && calc <= 34.9){
     res.textContent =  `ola, ${name}! seu imc é ${calc} você esta em obesidade grau 1!`
}else if(calc >=35 && calc <= 39.9){
     res.textContent =  `ola, ${name}! seu imc é ${calc} você esta em obesidade grau 2!`
}else if(calc >= 40 ){
     res.textContent =  `ola, ${name}! seu imc é ${calc} você esta em obesidade grau 3!`
}



}

btn.addEventListener("click", calcular)