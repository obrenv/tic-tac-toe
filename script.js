let cards = document.querySelectorAll(".field");
let counter = 1;
let winningCombo = 
[[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[7,5,3]];
let place = document.getElementById("text-field");
let button = document.getElementById("reset");
let winnerDeclared = false;


for(i=0;i<cards.length;i++){
let card = cards[i];


card.onclick = function(){



    if (counter%2 === 0 && card.dataset.pressed === "false" && winnerDeclared === false){
    let text1 = document.createElement("p");
    card.appendChild(text1);   
    text1.textContent="x";     
    playerX.playerArray.push(Number(card.dataset.key));
    counter++
}
    else if(counter%2 > 0 && card.dataset.pressed === "false" && winnerDeclared === false) {
    let text2 = document.createElement("p");
    card.appendChild(text2);   
    text2.textContent="o";
    playerO.playerArray.push(Number(card.dataset.key));
    counter++
}

card.dataset.pressed = true;


    
    for (i=0; i<winningCombo.length; i++){
        let testX = winningCombo[i].every(a => {return playerX.playerArray.includes(a)});
        
         if (testX === true && winnerDeclared === false){
           displayWinner("X");
           
         }


         let testO = winningCombo[i].every(a => {return playerO.playerArray.includes(a)});
        
         if (testO === true && winnerDeclared === false){
           
           displayWinner("O");
           
         }
         
       };



}

}



let playerFactory = (playerName) => {
    playerArray = [];
    playerScore = 0;
return{
    playerName,
    playerArray
}

}

let playerX = playerFactory("X");
let playerO = playerFactory("O");





function displayWinner(player){


let para = document.createElement("p");

place.appendChild(para);

para.textContent = player + " IS A WINNER";
button.style.display = "block";
winnerDeclared = true;

}


function resetAll(){
counter = 1;
cards.forEach(element => element.dataset.pressed = "false");
cards.forEach(element => element.innerHTML = "");
playerX.playerArray.splice(0, playerX.playerArray.length);
playerO.playerArray.splice(0, playerO.playerArray.length);
place.innerHTML = "";
button.style.display = "none";
winnerDeclared = false;
}

button.onclick = resetAll;