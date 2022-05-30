var contador = 0;
var perguntas = [];
var respostas = [];
var resposta_Errada1 = []
var resposta_Errada2 = []
var respostasCertas = 0;
var respostasErradas = 0;
var nmrSorteados = [];
var numero = 0;
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
        alert('Selecione uma resposta');
    }
    
    if(op == respostas[numero]){
        respostasCertas++;
    }else{
        respostasErradas++;
    }

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
    numero = Math.floor(Math.random() * perguntas.length);
    while(nmrSorteados.includes(numero)){
        numero = Math.floor(Math.random() * perguntas.length);
    }
    console.log(nmrSorteados.length + ' lenght')
        nmrSorteados.push(numero);
    if(nmrSorteados.length == 5){
        btnProx.innerHTML = "Concluir";
        document.getElementById( "btnProx" ).setAttribute( "onClick", "finalizar()" );
        
    }
   
    console.log(numero)
    var pergunta = perguntas[numero];
    var respostaCerta = respostas[numero];
    var errada1 = resposta_Errada1[numero];
    var errada2 = resposta_Errada2[numero];

    var respostaCertaLocal = Math.floor(Math.random() * 3);
    console.log(respostaCertaLocal)
    if(respostaCertaLocal == 0){

        document.getElementById("opcao1").value = respostaCerta;
        document.getElementById("opcao2").value = errada1;
        document.getElementById("opcao3").value = errada2;

        document.getElementById("label1").innerHTML = respostaCerta;
        document.getElementById("label2").innerHTML = errada1;
        document.getElementById("label3").innerHTML = errada2;

    }else if(respostaCertaLocal == 1){
        document.getElementById("opcao1").value = errada1;
        document.getElementById("opcao2").value = respostaCerta;
        document.getElementById("opcao3").value = errada2;

        document.getElementById("label1").innerHTML = errada1;
        document.getElementById("label2").innerHTML = respostaCerta;
        document.getElementById("label3").innerHTML = errada2;

    }else{
        document.getElementById("opcao1").value = errada1;
        document.getElementById("opcao2").value = errada2;
        document.getElementById("opcao3").value = respostaCerta;

        document.getElementById("label1").innerHTML = errada1;
        document.getElementById("label2").innerHTML = errada2;
        document.getElementById("label3").innerHTML = respostaCerta;

    }


    document.getElementById("pergunta").innerHTML = pergunta;
 
    
}

function finalizar(){
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
        alert('Selecione uma resposta');
    }
    
    if(op == respostas[numero]){
        respostasCertas++;
    }else{
        respostasErradas++;
    }



    var dados = sessionStorage.USUARIO;
        var usuario = JSON.parse(dados);
    console.log(usuario.idUsuario)
    fetch("/usuarios/quiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            qtdCertas: respostasCertas,
            qtdErradas: respostasErradas,
            fkUsuario: usuario.idUsuario
        })
    }).then(function (resposta) {
        location.href = "./resultados.html";
    }).catch(function (erro) {
        console.log(erro);
    }
    );

}