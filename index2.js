let dificultad = 10;
let intentos = 10;
let random = Math.floor(Math.random()*20);
let score = 100;
let numero;
let victoria = false;
let highscore = 0;
const audiowin = new Audio("sonic.mp3");
const audiolose = new Audio("pacman-dies.mp3");
document.getElementById("listaDeNumeros").innerHTML=""
document.getElementById("mensaje").innerHTML = "Enter a number";

function jugada(){
    if (victoria==false) {
        numero = document.getElementById("input").value
        if(numero===""||numero>20||numero==0){
            document.getElementById("mensaje").innerHTML = "Enter a number between (1 to 20)";
        }else{
            if (numero!=random) {
                intentos--;
                document.getElementById("intentos").innerHTML = "Attempts: " + intentos;
                document.getElementById("listaDeNumeros").innerHTML= document.getElementById("listaDeNumeros").innerHTML+" "+numero;
                score-=dificultad;
        
                if (numero>random) {
                    document.getElementById("mensaje").innerHTML = "Very high";
                } else {
                    document.getElementById("mensaje").innerHTML = "very low";
                }
                if (intentos==0) {
                    document.getElementById("mensaje").innerHTML = "You Lost";
                    document.body.style.backgroundColor = "#ff075b";
                    victoria=true;
                    audiolose.play();
                }
        
            } else {
                document.getElementById("mensaje").innerHTML = "You win";                
                victoria=true;
                document.body.style.backgroundColor = "#07ff5b";
                audiowin.play();
                
                if (score>highscore) {
                    highscore = score;                
                    document.getElementById("highscore").innerHTML = "Highcore: " + highscore;
                }
            }
            document.getElementById("input").value = "";   
        }
        
    }
}

function jugarDeNuevo(){
    dificultad = 10;
    intentos = 10;
    random = Math.floor(Math.random()*20);
    score = 100;
    victoria = false;
    document.getElementById("listaDeNumeros").innerHTML=""
    document.getElementById("mensaje").innerHTML = "Enter a number";
    document.getElementById("intentos").innerHTML = "Attempts: " + intentos;
    document.body.style.backgroundColor = "white";
}