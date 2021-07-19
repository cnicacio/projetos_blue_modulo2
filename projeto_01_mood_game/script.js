let imagem = document.getElementById('michael')
let botao = document.getElementById('mudar_humor')
let texto = document.getElementById('michael1')

botao.onclick = function(){
    if (botao.value === "confiante"){
        imagem.src = 'images/chateado.jpg';
        botao.value = 'chateado';
        texto.innerHTML = "#chateado por um novo corte no orçamento vindo da sede"
    }

    else if (botao.value === "chateado"){
        imagem.src = 'images/cagada.jpg';
        botao.value = 'cagada';
        texto.innerHTML = "preparado pra levar uma bronca sabendo que fiz uma cagada"
    }

    else if (botao.value === "cagada"){
        imagem.src = 'images/pistola.jpg'
        botao.value = 'pistola'
        texto.innerHTML = "extremamente pistola e revoltado"
    }

    else if (botao.value === "pistola"){
        imagem.src = 'images/confiante.jpg'
        botao.value = 'confiante'
        texto.innerHTML = "confiante para mais um dia de trabalho"
    }
}