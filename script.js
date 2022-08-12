let cards = document.querySelectorAll(".field");
let counter = 1;
for(i=0;i<cards.length;i++){
let card = cards[i];
card.onclick = function(){



    if (counter%2 === 0 && card.dataset.pressed === "false"){
    let text1 = document.createElement("p");
    card.appendChild(text1);   
    text1.textContent="x";     
    playerX.playerArray.push(card.dataset.key);
    counter++
}
    else if(counter%2 > 0 && card.dataset.pressed === "false") {
    let text2 = document.createElement("p");
    card.appendChild(text2);   
    text2.textContent="o";
    playerO.playerArray.push(Number(card.dataset.key));
    counter++
}

card.dataset.pressed = true;
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



let winningCombo = 
[[1,2,3]
[4,5,6]
[7,8,9]
[1,4,7]
[2,5,8]
[3,6,9]
[1,5,9]
[7,5,3]];


