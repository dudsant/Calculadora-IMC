function calc(){

    var peso = document.getElementById('peso').value 

    var altura = document.getElementById('altura').value

    alturaMetros = altura / 100
    
    var imc = peso / (alturaMetros ** 2)

    
    if (imc < 18.5) {
        document.getElementById('resultado').innerText = 'Você está abaixo do peso ideal para a sua altura.'
    }
    else if (imc < 24.9) {
        document.getElementById('resultado').innerText = 'Você está no peso ideal para a sua altura.'
    }
    else if (imc < 29.9) {
        document.getElementById('resultado').innerText = 'Você está acima do peso ideal para a sua altura.'
    }
    else if (imc < 39.9) {
        document.getElementById('resultado').innerText = 'Você está com obesidade.'
    }
    else if (imc > 39.9) {
        document.getElementById('resultado').innerText = 'Você está com obesidade mórbida.'
    }

}