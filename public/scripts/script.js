var baixo = true;
var pos =0;
var repetir = true
var aud;
var subindo = true;

function baixou(){
    var notacerta = false;
    if (event.repeat != undefined) {
        repetir = !event.repeat;
      }
      if (!repetir) return;
      repetir = false;
      console.log(event.keyCode);
   /*
65 - a
 83 - s
 68 - d
 70 - f
 71 - g
 72 - h
 74 - i
 75 - j
 76 - k
 90 - l
88 - z
67 - x
86 - c
66 - v
78 - b
77- n
91- m
   */
    if(event.keyCode == 65){
        console.log("a - nota do - Sol")
        aud = new Audio('./notas/doS.wav');
        doS.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 83){
        console.log("s - nota re - re")
        aud = new Audio('./notas/reR.wav');
        reR.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 68){
        console.log("d - nota mi - re")
        aud = new Audio('./notas/miR.wav');
        miR.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 70){
        console.log("f - nota fa - re")
        aud = new Audio('./notas/faR.wav');
        faR.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 71){
        console.log("g - nota sol - re")
        aud = new Audio('./notas/solR.wav');
        solR.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 72){
        console.log("h - nota la - la")
        aud = new Audio('./notas/laL.wav');
        laL.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 74){
        console.log("j - nota si - la")
        aud = new Audio('./notas/siL.wav');
        siL.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 75){
        console.log("k - nota do - la")
        aud = new Audio('./notas/doL.wav');
        doL.style.display = "block";
        notacerta = true;

    }
    if(event.keyCode == 76){
        console.log("l - nota re - la")
        aud = new Audio('./notas/reL.wav');
        reL.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 90){
        console.log("z - nota mi - mi")
        aud = new Audio('./notas/miM.wav');
        miM.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 88){
        console.log('x - nota fa - mi')
        aud = new Audio('./notas/faM.wav');
        faM.style.display = "block";
        notacerta = true;
    }
    if(event.keyCode == 67){
        console.log('c - nota sol - mi')
        aud = new Audio('./notas/solM.wav');
        solM.style.display = "block";
        notacerta = true;
    }

    if(notacerta){
        var elem = document.getElementById("arco");
        if(subindo){
            elem.style.webkitAnimationName = "subir"
        }else{
            elem.style.webkitAnimationName = "descer"
        }
    }

   
}
function segurou() {
  
  
   
    aud.play()
  
    aud.loop = false;
  
}
var teclaAtual = 0
//tocar som enquanto a tecla estiver pressionada
teclaAtual = 30;

function levantou(){
        doS.style.display = "none";
        reR.style.display = "none";
        miR.style.display = "none";
        faR.style.display = "none";
        solR.style.display = "none";
        laL.style.display = "none";
        siL.style.display = "none";
        doL.style.display = "none";
        reL.style.display = "none";
        miM.style.display = "none";
        faM.style.display = "none";
        solM.style.display = "none";








        aud.pause();
        aud = '';
        if(subindo) subindo = false;
        else subindo = true;
}

function inicializa() {
    document.addEventListener('keydown',baixou)
    document.addEventListener('keypress', segurou);
    document.addEventListener('keyup', levantou);
}

