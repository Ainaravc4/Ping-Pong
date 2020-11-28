
//porque en  el depurador me da error la funcion mover pala

class juego{
    constructor(){
        
        this.espacio=new espacio(1500,1000);
        this.pala1=new pala(10,350,30,200,"red");
        this.pala2=new pala(1460,350,30,200,"blue");
        this.bola= new bola(450,450,30,"white",4,4);
       
        this.espacio.pintarSVG();
        this.pala1.pintarPala();
        this.pala2.pintarPala();
        this.bola.pintar();
        this.espacio.quitarMensaje();
        
        
        this.subirPala1=false;
        this.bajarPala1=false;
        this.subirPala2=false;
        this.bajarPala2=false;


        let score1=0;
        let score2=0;

        this.espacio.dibujarPuntuacion();

        this.final= this.animarBola(score1,score2); 
        this.animarPala(); 
       
    }

    reiniciarPartida(){
        if(this.final==1 || this.final==2){
            return true
        }
        return false;
    }
    
    animarBola(score1,score2){
        this.intevalo= setInterval(()=>{

            let choque= this.bola.mover(this.pala1, this.pala2);
            if(choque==1){
                score2++;
            }
            if(choque==2){
                score1++;
            }

            this.espacio.actualizarPuntuacion(score1,score2);

            let final=0;
            if(score1==2){
                this.espacio.dibujarGanador("Rojo");
                clearInterval(this.intevalo);
                final=1;
                
            }
            if(score2==2){
                this.espacio.dibujarGanador("Azul");
                clearInterval(this.intevalo);
                final=2;
                
            } 
            return final;  
        },7);
    }

    animarPala(){
        setInterval(()=>{
            //Moviento de las palas con el teclado
            if(this.subirPala1){
                this.pala1.moverAbajo();
                this.pala1.actualizaVista();
            } else if(this.bajarPala1){
                this.pala1.moverArriba();
                this.pala1.actualizaVista();
            }

            if(this.subirPala2){
                this.pala2.moverAbajo();
                this.pala2.actualizaVista();
            }else if(this.bajarPala2){
                this.pala2.moverArriba();
                this.pala2.actualizaVista();
            }
            
        },7)
    }
    
    
    
    moverPala(e){
        if(e == "w")
            this.subirPala1 = true;
        else if(e == "s")
            this.bajarPala1 = true;
    
        if(e == "ArrowUp")
            this.subirPala2 = true;
        else if(e == "ArrowDown")
            this.bajarPala2 = true;
    }
    
    
    pararPala(e){
        if(e == "w")
            this.subirPala1 = false;
        else if(e == "s")
            this.bajarPala1 = false;
    
        if(e == "ArrowUp")
            this.subirPala2 = false;
        else if(e == "ArrowDown")
            this.bajarPala2 = false;
    }

    

    clicarPala(n){
        if(n=="uno"){
            this.subirPala1 = true;
        }
        if(n=="dos"){
            this.bajarPala1 = true;
        }
        if(n=="tres"){
            this.subirPala2 = true;
        }
        if(n=="cuatro"){
            this.bajarPala2 = true;
        }
    } 

    dejarClicarPala(n){
        if(n=="uno"){
            this.subirPala1 = false;
        }
        if(n=="dos"){
            this.bajarPala1 = false;
        }
        if(n=="tres"){
            this.subirPala2 = false;
        }
        if(n=="cuatro"){
            this.bajarPala2 = false;
        }
    }       
}


class bola{
    constructor(x,y,r,color,incX,incY){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        
        this.incX=incX;
        this.incY=incY;

        this.circle=null;
        this.espacio=null;

        this.score1=0;
        this.score2=0;
    }
    pintar(){
        this.espacio=document.getElementById("espacio");
        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttribute("cx",this.x);
        this.circle.setAttribute("cy",this.y);
        this.circle.setAttribute("r",this.r);
        this.circle.setAttribute("fill",this.color);
        
        this.espacio.appendChild( this.circle);
    }

    mover(pala1,pala2){ 

        /*choche 1= izquierda 2 =derecha */
        let choque=0;

        //tamaño del svg
        let tamañoSvg=this.espacio.getBoundingClientRect();

        //REBOTE PALA 1
        if ((this.x - this.r) <= (pala1.getPalaX + pala1.getpalasAncho) && pala1.getPalaY<= (this.y - this.r)  && (this.y - this.r) <= (pala1.getPalaY + pala1.getpalasAlto)){
            this.incX*=-1;
        }
          
        //REBOTE PALA 2
          if ((this.x + this.r) >= (pala2.getPalaX ) && pala2.getPalaY <= (this.y + this.r) && (this.y + this.r) <= (pala2.getPalaY + pala2.getpalasAlto)){
            this.incX*=-1;
        }

        this.x+=this.incX;
        this.y+=this.incY;
        this.circle.setAttribute("cx",this.x);
        this.circle.setAttribute("cy",this.y);

    
        //REBOTE TECHO
        if((this.y+this.r)>=tamañoSvg.height||(this.y-this.r)<=0)
            this.incY*=-1;
        

        //PUNTUACION
        if((this.x+this.r)===tamañoSvg.width){
            choque=2;
            this.incX*=-1;
        }

        if((this.x-this.r)===0 ){
            choque=1;
            this.incX*=-1;
            
        }
        return choque;    
    }
}



class pala{
    
    constructor(x,y,ancho,alto,color){
        this.palay1=y;
        this.palax1=x;
        this.palasAncho=ancho;
        this.palasAlto=alto;
        this.color=color;
    }
    pintarPala(){
        this.espacio=document.getElementById("espacio");
        this.rect=document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.rect.setAttribute("x",this.palax1);
        this.rect.setAttribute("y",this.palay1);
        this.rect.setAttribute("width",this.palasAncho);
        this.rect.setAttribute("height",this.palasAlto);
        this.rect.setAttribute("id","pala");
        this.rect.setAttribute("fill",this.color)
        
        this.espacio.appendChild( this.rect);
    }
    moverAbajo(){
        if(this.palay1>0)
            this.palay1-=10;
    }

    moverArriba(){
        let tamañoSvg=this.espacio.getBoundingClientRect();
        if(this.palay1<tamañoSvg.height-this.palasAlto)
            this.palay1+=10;
    }

    actualizaVista(){
        this.rect.setAttribute("y",this.palay1);
    }    

    get getPalaX(){
        return this.palax1;
    }

    get getPalaY(){
        return this.palay1;
    }

    get getpalasAlto(){
        return this.palasAlto;
    } 
    get getpalasAncho(){
        return this.palasAncho;
    } 
}



class espacio{
    constructor(ancho,alto){
        this.ancho=ancho;
        this.alto=alto;
        this.espacio=null;
        this.linea=null;
        this.solu=null;
        this.puntos=null;
    }

    pintarSVG(){
        
        this.espacio=document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.espacio.setAttribute("width",this.ancho);
        this.espacio.setAttribute("height",this.alto);
        this.espacio.style.backgroundColor="gainsboro";
        this.espacio.style.margin="auto";
        this.espacio.style.display="block";
        this.espacio.setAttribute("id","espacio");
        
        document.body.appendChild( this.espacio);        
    }
    quitarMensaje(){
        this.mensaje=document.getElementById("mensaje");
        this.mensaje.style.display="none";
    }
    dibujarPuntuacion(){
        this.puntos=document.createElement("h1");
        this.puntos.style.textAlign="center";
        document.body.appendChild(this.puntos);
    }
    actualizarPuntuacion(p1,p2){
        this.puntos.textContent=p1+"|"+p2;
    }

    dibujarGanador(nom){
        this.solu=document.createElement("h1");
        this.solu.style.textAlign="center";
        this.solu.textContent=nom+" ¡GANADOR!";
        document.body.appendChild(this.solu);
    }

}


export{juego}