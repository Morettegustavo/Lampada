// pegando elementos do HTML
const turnOn = window.document.getElementById('ligar')
const turnOff = window.document.getElementById('desligar')
const lamp = document.getElementById('lamp')
const msg = document.getElementById('msg')

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()){
        lamp.src = './imagens/ligada.jpg'    
    }
    
}
function lampOff(){
    if (!isLampBroken()){
        lamp.src = './imagens/desligada.jpg'
    }else {
        msg.innerHTML = ('Essa não &#x1F62E; a lâmpada quebrou &#x1F615;  <br>Não tem problema, precione a tecla F5 &#x1F604;')
    }
}

function lampBroken(){
    lamp.src = './imagens/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)