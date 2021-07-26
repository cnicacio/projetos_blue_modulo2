from flask import Flask, app, render_template, request, redirect
from flask_mail import Mail, Message

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'ceanicacio@gmail.com',
    "MAIL_PASSWORD": '3dun1c4c10/i99a'
}

app.config.update(mail_settings)
mail = Mail(app)

class Contato:
    def __init__(self, nome, telefone, email, mensagem):
        self.nome = nome
        self.telefone = telefone
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enviar', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['telefone'],
            request.form['email'],
            request.form['mensagem']
        )

        mensagem = Message(
            subject='Contato do seu portfólio',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=[app.config.get("MAIL_USERNAME")],
            body=f'''
                O {formContato.nome} com o email {formContato.email} e o telefone {formContato.telefone} te mandou a seguinte mensagem:
          
                {formContato.mensagem}
                '''
            )
        mail.send(mensagem)

    return render_template('enviar.html', formContato=formContato)

if __name__ == '__main__':
   app.run(debug=True)