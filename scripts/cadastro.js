var vendoSenha = false;
var vendoConf = false;

function verSenha(){
    if(vendoSenha == false){
        document.getElementById("senha").type = "text";
        verS.src = '../imgs/private.png'
        vendoSenha = true;
    }else{
        document.getElementById("senha").type = "password";
        verS.src = '../imgs/view.png'
        vendoSenha = false;
    }
}
function verConfSenha(){
    if(vendoConf == false){
        document.getElementById("cSenha").type = "text";
        verC.src = '../imgs/private.png'
        vendoConf = true;
    }else{
        document.getElementById("cSenha").type = "password";
        verC.src = '../imgs/view.png'
        vendoConf = false;
    }
}

