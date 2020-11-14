export{jugador,bola,tablero}

class jugador{
    constructor(y){
        this.y=y;
        this.newY1='';
        this.newY2='';
    }

    moverPala1(newY1){
       var pala1= document.getElementById("pala1");
       this.newY1=pala1.setAttribute("y",newY1);

    }
    moverPala2(newY2){
        var pala2= document.getElementById("pala2");
        this.newY2=pala2.setAttribute("y",newY2);

    }

}

class bola{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.movimiento=1;
    }

    golpearlaIzquierda(){
        var bola= document.getElementById("bola");
        if(bola.getAttribute("y")&&bola.getAttribute("y")==jugador.newY1){
            return true;
        }
        else{
            return false;
        }
    }
    golpearlaDerecha(){
        var bola= document.getElementById("bola");
        if(bola.getAttribute("y")&&bola.getAttribute("y")==jugador.newY2){
            return true;
        }
        else{
            return false;
        }
    }

    golpearParedes(){
        var bola= document.getElementById("bola");
        if(bola.getAttribute("y")&&bola.getAttribute("y")==tablero.x){
            return true;
        }
        else{
            return false;
        }
    }



}

class tablero{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

}


