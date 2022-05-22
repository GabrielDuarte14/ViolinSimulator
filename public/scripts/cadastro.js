var vendoSenha = false;
var vendoConf = false;

function verSenha() {
    if (vendoSenha == false) {
        document.getElementById("senha").type = "text";
        verS.src = '../imgs/private.png'
        vendoSenha = true;
    } else {
        document.getElementById("senha").type = "password";
        verS.src = '../imgs/view.png'
        vendoSenha = false;
    }
}

function verConfSenha() {
    if (vendoConf == false) {
        document.getElementById("cSenha").type = "text";
        verC.src = '../imgs/private.png'
        vendoConf = true;
    } else {
        document.getElementById("cSenha").type = "password";
        verC.src = '../imgs/view.png'
        vendoConf = false;
    }
}

function aguardar() {
    espera.style.display = "block";
}

function finalizarAguardar() {
    espera.style.display = "none";
}

function cadastrar() {
    aguardar()

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome.value;
    var emailVar = email.value;
    var senhaVar = senha.value;
    var confirmacaoSenhaVar = cSenha.value;
    
    if (nomeVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo nome está em branco!";

        finalizarAguardar();
        return false;
    } else if (emailVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo email está em branco!";

        finalizarAguardar();
        return false;
    } else if (senhaVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo senha está em branco!";
        finalizarAguardar();
        return false;
    } else if (confirmacaoSenhaVar == "") {
        msgErro.style.display = "block"
        msgErro.innerHTML = "O campo confirmação de senha está em branco!";
        finalizarAguardar();
        return false;

    } else if (senhaVar != confirmacaoSenhaVar) {
        msgErro.style.display = "block"
        msgErro.innerHTML = "As senhas não conferem!";
        finalizarAguardar();
        return false;
    }else if(emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1){
        msgErro.style.display = "block"
        msgErro.innerHTML = "O email não é válido!";
        finalizarAguardar();
        return false;
    } 
    else {
        setInterval(sumirMensagem, 5000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            msgErro.style.display = "block";

            msgErro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}

function sumirMensagem() {
    msgErro.style.display = "none"
}
function limparFormulario() {
    nome.value = "";
    email.value = "";
    senha.value = "";
    cSenha.value = "";
}

