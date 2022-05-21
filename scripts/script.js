var baixo = true;
var pos =0;
var repetir = true
var aud;
var subindo = true;
function baixou(){
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
    }
    if(event.keyCode == 83){
        console.log("s - nota re - re")
    }
    if(event.keyCode == 68){
        console.log("d - nota mi - re")
    }
    if(event.keyCode == 70){
        console.log("f - nota fa - re")
    }
    if(event.keyCode == 71){
        console.log("g - nota sol - re")
    }
    if(event.keyCode == 72){
        console.log("h - nota la - la")
    }
    if(event.keyCode == 74){
        console.log("j - nota si - la")
    }
    if(event.keyCode == 75){
        console.log("k - nota do - la")
    }
    if(event.keyCode == 76){
        console.log("l - nota re - la")
    }
    if(event.keyCode == 90){
        console.log("z - nota mi - mi")
    }
    if(event.keyCode == 88){
        console.log('x - nota fa - mi')
    }
    if(event.keyCode == 67){
        console.log('c - nota sol - mi')
    }


    if(event.keyCode == 65) {
        console.log('si')
        aud = new Audio('./notas/siS.wav');
    }else{
        console.log('do')
        aud = new Audio('./notas/doS.wav');
    }
}
function segurou() {
  
    var elem = document.getElementById("arco");
    if(subindo){
        elem.style.webkitAnimationName = "subir"
    }else{
        elem.style.webkitAnimationName = "descer"
    }
   
    aud.play()
  
    aud.loop = false;
  
}
var teclaAtual = 0
//tocar som enquanto a tecla estiver pressionada
teclaAtual = 30;

function levantou(){
   
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

