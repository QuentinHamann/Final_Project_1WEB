s=0;
let jaune=0
let rouge =0
let condition = 2
let board=new Array();
let contenu=document.getElementById('p4');
victoire = false


let player=1;
let colonne = prompt("Choisissez le nombre de colonnes ")
let ligne = prompt("Choisissez le nombre de lignes ?")
let button= document.getElementById('newgame');

button.addEventListener("click", function(){
    player=1;
    newgame();
});

let button1= document.getElementById('equality');

button1.addEventListener("click", function(){
    equality();
});

let button2 = document.getElementById('one');
    button2.addEventListener("click", function règles(){
        document.location.href="Règles.html";
    });


let button3 = document.getElementById('two');
    button3.addEventListener("click", function Jouer(){
        document.location.href="Puissance4.html";
    });





function initgame(ligne,colonne){
    contenu.innerHTML="";
    let table=document.createElement('table');
    for (let i=0; i<ligne;i++){
        board[i]=new Array();
        let ligne=document.createElement('tr');
        ligne.id="L"+i;
        for (let j=0; j<colonne; j++){
            board[i][j]=0;
            let colonne=document.createElement('td');
            colonne.id="L"+i+"C"+j;
            ligne.appendChild(colonne);
        };
        table.appendChild(ligne);
    };
    contenu.appendChild(table);
}

function Chrono() {
  document.formu.seco.value =s;
  s++;
  chrono=window.setTimeout("Chrono();",1000);
}

function timereset(){
    {s=0; window.status = document.formu.seco.value='0'+0;}
}



function score(){
    let score=document.getElementById('score');
    score.innerHTML="Score : "+ '<br>' +"Jaune " +jaune +'<br>'+"Rouge "+rouge;
}


function newgame(){
    if (colonne<5){
        colonne=5
    }
    if (colonne>9){
        colonne=9
    }
    if (ligne<5){
        ligne=5
    }
    if (ligne>9){
        ligne=9
    }
    initgame(ligne,colonne);
    event(ligne,colonne);
    Chrono()
    timereset()
    score()
    let win = document.getElementById('win')
    win.innerHTML=""

}


function event(ligne,colonne){
    for (let i=0; i<ligne;i++){
        for (let j=0; j<colonne; j++){
            let casev=document.getElementById("L"+i+"C"+j);
            casev.addEventListener('click',clicked);
        };
    };
}

function equality(){
    window.clearTimeout(chrono)
    alert("Match nul 1 point pour chaque Joueur")
    alert("Si vous souhaitez rejouer appuyez sur Nouvelle partie")
    rouge++;
    jaune++;
}


function clicked(){
    let play = 1
    let x=ligne-1;
    let y=Number(this.id.charAt(3));
        while (x>=0){
            if (board[x][y]==0){
                let caseMin=document.getElementById("L"+x+"C"+y);
                let div=document.createElement('div');
                div.className="player";
                caseMin.appendChild(div);
                
                if (player===1){
                    play = 2
                    div.style.backgroundColor="yellow";
                    board[x][y]=player;
                }
                else if (player===-1){
                    play =1
                    div.style.backgroundColor="red";
                    board[x][y]=player;
                }
                let turn = document.getElementById('win')
                turn.innerHTML="Tour joueur "+ play
                victory(x,y);
                player*=-1;
                x=-1;
            }
            else {
            x--
            };
        };
}

function victory(i, j){
    let jetonL=0;
    let a=0;
    while (a<colonne){
        if (board[i][a]==player){
            jetonL++;
            a++;
        }
        else if (board[i][a]!==player&&jetonL==4){
            a++;
        }
        else {
            jetonL=0;
            a++;
        };
    };


    let jetonV=0;
    let b=0;
    while (b<ligne){
        if (board[b][j]==player){
            jetonL++;
            b++;
        }
        else if (board[b][j]!==player&&jetonL==4){
            b++;
        }
        else {
            jetonL=0;
            b++;
        };
    };

    let jetonD=0;
    let c=0;
    while(i+c<ligne&&j-c<colonne){
        if (board[i+c][j-c]==player){
            jetonD++;
            c++;
        }
        else if (board[i+c][j-c]!==player&&jetonD==4){
            c++;
        }
        else {
            jetonD=0;
            c++;
        };
    };

    let jetonG=0;
    let d=0;
    while (i+d<ligne&&j+d<colonne){
        if (board[i+d][j+d]==player){
            jetonG++;
            d++;
        }
        else if (board[i+d][j+d]!==player&&jetonG==4){
            d++;
        }
        else {
            jetonG=0;
            d++;
        };
    };


    if (jetonL>=4){
        window.clearTimeout(chrono)
        let time = document.querySelector("#chrono").value;
        if (player===1){
            let winner= "Jaune"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                jaune = jaune+3;
            }
            else {
                jaune= jaune+2;  
            }
            
        }
        else{
            let winner= "Rouge"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                rouge = rouge+3;
            }
            else {
                rouge= rouge+2;  
            }
        };
        for (let i=0; i<ligne;i++){
            for (let j=0; j<colonne; j++){
                let casev=document.getElementById("L"+i+"C"+j);
                casev.removeEventListener('click',clicked);
            };
        };
    };

    if (jetonV>=4){
        window.clearTimeout(chrono)
        let time = document.querySelector("#chrono").value;
        if (player===1){
            let winner= "Jaune"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                jaune = jaune+3;
            }
            else {
                jaune= jaune+2;  
            }
            
        }
        else{
           let winner= "Rouge"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                rouge = rouge+3;
            }
            else {
                rouge= rouge+2;  
            }
        };
        for (let i=0; i<ligne;i++){
            for (let j=0; j<colonne; j++){
                let casev=document.getElementById("L"+i+"C"+j);
                casev.removeEventListener('click',clicked);
            };
        };
    };

    if (jetonD>=4){
        window.clearTimeout(chrono)
        let time = document.querySelector("#chrono").value;
        if (player===1){
           let winner= "Jaune"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                jaune = jaune+3;
            }
            else {
                jaune= jaune+2;  
            }
            
        }
        else{
           let winner= "Rouge"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                rouge = rouge+3;
            }
            else {
                rouge= rouge+2;  
            }
        };
        for (let i=0; i<ligne;i++){
            for (let j=0; j<colonne; j++){
                let casev=document.getElementById("L"+i+"C"+j);
                casev.removeEventListener('click',clicked);
            };
        };
    };
    if (jetonG>=4){
        window.clearTimeout(chrono)
        let time = document.querySelector("#chrono").value;
        if (player===1){
            let winner= "Jaune"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                jaune = jaune+3;
            }
            else {
                jaune= jaune+2;  
            }
            
        }
        else{
           let winner= "Rouge"
            let win = document.getElementById('win')
            win.innerHTML="Le joueur " + winner+ " à gagné."
            if (time<30){
                rouge = rouge+3;
            }
            else {
                rouge= rouge+2;  
            }
        };
        for (let i=0; i<ligne;i++){
            for (let j=0; j<colonne; j++){
                let casev=document.getElementById("L"+i+"C"+j);
                casev.removeEventListener('click',clicked);
            };
        };  
    };



}




