import{juego} from "./clases.js"

var juego2=null;

window.onload= main;

function main(){
    comenzarPartida();
    movimientoPalas();
    
}

function comenzarPartida(){
    window.addEventListener("keypress",()=>{
        if(juego2==null){
            juego2=new juego();   
        }
        if (juego2.reiniciarPartida())
            juego2=null;
    }); 
    window.addEventListener("touchend",()=>{
        if(juego2==null){
            juego2=new juego();   
        }
        if (juego2.reiniciarPartida())
            juego2=null;
    }); 
}


    
function movimientoPalas(){

    window.addEventListener('keydown',(e)=>{
        let tecla = e.key;
        juego2.moverPala(tecla);
    });

    window.addEventListener('keyup',(e)=>{
        let tecla = e.key;
        juego2.pararPala(tecla);
    });
    

    //Movimiento de las palas con click

    document.getElementById("uno").addEventListener("touchstart",()=>{
        juego2.clicarPala("uno");
    })
    document.getElementById("uno").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("uno");
    })

    document.getElementById("dos").addEventListener("touchstart",()=>{
        juego2.clicarPala("dos");
    })
    document.getElementById("dos").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("dos");
    })

    document.getElementById("tres").addEventListener("touchstart",()=>{
        juego2.clicarPala("tres");
    })
    document.getElementById("tres").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("tres");
    })

    document.getElementById("cuatro").addEventListener("touchstart",()=>{
        juego2.clicarPala("cuatro");
    })
    document.getElementById("cuatro").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("cuatro");
    })
}

    

