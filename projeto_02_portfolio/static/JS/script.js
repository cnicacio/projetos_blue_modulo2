let nome = document.querySelector('#nome')
let telefone = document.querySelector('#telefone')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btnEnviar = document.getElementById("enviar")
let nomeOk = false
let telefoneOk = false
let emailOk = false
let msgOk = false
let numero = /\d+/
let letra = /[a-zA-Z]/
btnEnviar.disabled = true

nome.addEventListener('keydown', () => {
    if (nome.value.length < 3 || numero.test(nome.value) === true) {
        nome.style.borderColor = 'red'
        nomeOk = false
    } else {
        nome.style.borderColor = 'green'
        nomeOk = true
    }

    if (nomeOk && telefoneOk && emailOk && msgOk) {
        btnEnviar.disabled = false
    } else {
        btnEnviar.disabled = true
    }
})

telefone.addEventListener('keydown', () => {
    if (telefone.value.length < 11 || letra.test(telefone.value) === true) {
        telefone.style.borderColor = 'red'
        telefoneOk = false
    } else {
        telefone.style.borderColor = 'green'
        telefoneOk = true
    }

    if (nomeOk && telefoneOk && emailOk && msgOk) {
        btnEnviar.disabled = false
    } else {
        btnEnviar.disabled = true
    }
})

email.addEventListener('keydown', () => {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.style.borderColor = 'red'
        emailOk = false
    } else {
        email.style.borderColor = 'green'
        emailOk = true
    }

    if (nomeOk && telefoneOk && emailOk && msgOk) {
    btnEnviar.disabled = false
    } else {
    btnEnviar.disabled = true
    }
})

mensagem.addEventListener('keydown', () => {
   if (mensagem.value.length > 500 || mensagem.value.length === 0) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
       mensagem.style.borderColor = 'green'
        msgOk = true    
    }

    if (nomeOk && telefoneOk && emailOk && msgOk) {
        btnEnviar.disabled = false
        } else {
        btnEnviar.disabled = true
        }
})


btnEnviar.addEventListener('click', () => {
   /* Mostra a div de carregamento */
   let carregamento = document.querySelector('#carregamento')
   carregamento.style.display = 'flex'

   /* Esconde o Form */
   let form = document.querySelector('form')
   form.style.display = 'none'
})