function entrar() {
    aguardar()

    var emailVar = email.value;
    var senhaVar = senha.value;


    if (emailVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo email está em branco!";

        finalizarAguardar();
        return false;
    } else if (senhaVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo senha está em branco!";
        finalizarAguardar();
        return false;
    } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O email não é válido!";
        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000)
    }
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function(resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.USUARIO = JSON.stringify(json);
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function() {
                    window.location = "./escolheJogo.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            msgErro.style.display = "block"
            msgErro.innerHTML = "Usuário ou senha inválidos!";

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function(erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    msgErro.style.display = "none"
}

function aguardar() {
    espera.style.display = "block";
}

function finalizarAguardar() {
    espera.style.display = "none";
}

function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {

    sessionStorage.clear();

    window.location = "index.html";
}