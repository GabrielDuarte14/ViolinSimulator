var contador = 0;
var perguntas = [];
var respostas = [];
var resposta_Errada1 = []
var resposta_Errada2 = []
var respostasCertas = 0;
var respostasErradas = 0;
var nmrSorteados = [];

function proxima(){
    var op1 = document.getElementById("opcao1");
    var op2 = document.getElementById("opcao2");
    var op3 = document.getElementById("opcao3");
    var op = 0;
    if(op1.checked){
        op = op1.value;
        
    }else if(op2.checked){
        op = op2.value;
    }else if(op3.checked){
        op = op3.value;
    }else{
        alert('ta errado ein')
    }
    alert(op)
    renderizarPergunta()
    op1.checked = false;
    op2.checked = false;
    op3.checked = false;

}

function pegarPerguntas(){
    //
    fetch("/usuarios/listarPerguntas").then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                //console.log(json);
              console.log(JSON.stringify(json));
                json.forEach(element => {
                    console.log(" --------------------- ")
                    console.log(element.pergunta);
                    console.log(element.respostaCerta);
                    console.log(element.respostaErrada1);
                    console.log(element.respostaErrada2);
                    
                    perguntas.push(element.pergunta);
                    respostas.push(element.respostaCerta);
                    resposta_Errada1.push(element.respostaErrada1);
                    resposta_Errada2.push(element.respostaErrada2);
                });
                renderizarPergunta();
            });

        } else {

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function renderizarPergunta(){
    //numero aleatorio entre 0 e 4, sem repetir
    var numero = Math.floor(Math.random() * perguntas.length);
    if(nmrSorteados.includes(numero)){
        renderizarPergunta();
        return false;
    }else{
        nmrSorteados.push(numero);
    }
    if(nmrSorteados.length == 5){
        btnProx.innerHTML = "Concluir";
        btnProx.onClick = function(){
            finalizar();
        }
    }
   
    console.log(numero)
    var pergunta = perguntas[numero];
    var respostaCerta = respostas[numero];
    var errada1 = resposta_Errada1[numero];
    var errada2 = resposta_Errada2[numero];
    document.getElementById("pergunta").innerHTML = pergunta;
    document.getElementById("opcao1").value = respostaCerta;
    document.getElementById("opcao2").value = errada1;
    document.getElementById("opcao3").value = errada2;
    document.getElementById("label1").innerHTML = respostaCerta;
    document.getElementById("label2").innerHTML = errada1;
    document.getElementById("label3").innerHTML = errada2;
    
}

function finalizar(){
    
}