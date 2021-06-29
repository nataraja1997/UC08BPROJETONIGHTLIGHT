//***************FORMULÁRIO**********************************//
document.getElementById('nome');
document.getElementById('email');
document.getElementById('telefone');
document.getElementById('unidform');
document.getElementById('dia');
document.getElementById('horario');
document.getElementById('enviar');
texto = "O campo deve ser preenchido/selecionado!"
textoEmail = "O email deve ser preenchido no formato correto. Exemplo: usuario@empresa.com"
textoTelefone = "O telefone deve ser preenchido no formato correto para número de celular ou telefone fixo. Exemplo: (00)999999999"

function enviaForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var unidform = document.getElementById('unidform').value;
    var dia = document.getElementById('dia').value;
    var horario = document.getElementById('horario').value;

    if (nome != "" && email !== "" && telefone != "" && unidform !== "" && dia != "" && horario !== "") {
        alert("Formulário preenchido e enviado com sucesso!");
    }
    else
        alert("Formulário falta ser preenchido!");
}
function funcaoNome() {
    var nome = document.getElementById('nome').value;
    if (nome == "") {
        document.getElementById('textNome').innerHTML = texto;
        nome.focus()
    }
    else
        document.getElementById("textNome").style.display = "none";
    nome.focus()
}
//***************FUNÇÃO EMAIL**********************************//
var regex = /\S+@\S+\.\S+/;

function funcaoEmail() {
    var email = document.getElementById('email').value;
    if (regex.test(email)) {
document.getElementById("textEmail").style.display = "none";
        unidform.focus()
            return true        
    }
    else
    document.getElementById('textEmail').innerHTML = textoEmail;
        email.focus()
        
}
//***************FUNÇÃO TELEFONE**********************************//
var exp = /[1-9]{2}[)](?:[2-9]|9[1-9])[0-9]{7}/;

function funcaoTelefone() {
    var telefone = document.getElementById('telefone').value;
    if (exp.test(telefone)) {
        document.getElementById("textTelefone").style.display = "none";
        unidform.focus()
            return true        
    }
    else
    document.getElementById('textTelefone').innerHTML = textoTelefone;
        telefone.focus()
        
}
function funcaoUnidform() {
    var unidform = document.getElementById('unidform').value;
    if (unidform == "") {
        document.getElementById('textUnidform').innerHTML = texto;
        unidform.focus()
    }
    else
        document.getElementById("textUnidform").style.display = "none";
        unidform.focus()
}
function funcaoDia() {
    var dia = document.getElementById('dia').value;
    if (dia == "") {
        document.getElementById('textDia').innerHTML = texto;
        dia.focus()
    }
    else
        document.getElementById("textDia").style.display = "none";
        dia.focus()
}
function funcaoHorario() {
    var horario = document.getElementById('horario').value;
    if (horario == "") {
        document.getElementById('textHorario').innerHTML = texto;
        horario.focus()
    }
    else
        document.getElementById("textHorario").style.display = "none";
        horario.focus()
}

//***************CARROSSEL**********************************//
let time = 3000,
imgAtual = 0,
    imagens = document
                .querySelectorAll("#todosSlides img")
    max = imagens.length;
    

function proximaImg() {

    imagens[imgAtual]
        .classList.remove("seleciona")

    imgAtual++

    if(imgAtual >= max)
    imgAtual = 0

    imagens[imgAtual]
        .classList.add("seleciona")
}

function start() {
    setInterval(() => {        
        proximaImg()
    }, time)
}

window.addEventListener("load", start)

