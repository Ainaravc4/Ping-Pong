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
    }); 
    window.addEventListener("touchend",()=>{
        if(juego2==null){
            juego2=new juego();   
        }
    }); 
}


    
function movimientoPalas(){

  //Movimiento de las palas con el teclado

    window.addEventListener('keydown',(e)=>{
        let tecla = e.key;
        juego2.moverPala(tecla);
    });

    window.addEventListener('keyup',(e)=>{
        let tecla = e.key;
        juego2.pararPala(tecla);
    });
    

    //Movimiento de las palas con eventos tactiles

    document.getElementById("uno-1").addEventListener("touchstart",()=>{
        juego2.clicarPala("uno");
    })
    document.getElementById("uno-1").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("uno");
    })

    document.getElementById("uno-2").addEventListener("touchstart",()=>{
        juego2.clicarPala("dos");
    })
    document.getElementById("uno-2").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("dos");
    })

    document.getElementById("dos-1").addEventListener("touchstart",()=>{
        juego2.clicarPala("tres");
    })
    document.getElementById("dos-1").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("tres");
    })

    document.getElementById("dos-2").addEventListener("touchstart",()=>{
        juego2.clicarPala("cuatro");
    })
    document.getElementById("dos-2").addEventListener("touchend",()=>{
        juego2.dejarClicarPala("cuatro");
    })
}

    

