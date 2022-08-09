let cards = document.querySelectorAll(".field");
let counter = 1;
for(i=0;i<cards.length;i++){
let card = cards[i];
card.onclick = function(){



    if (counter%2 === 0 && card.dataset.pressed === "false"){

    let text1 = document.createElement("p");
    card.appendChild(text1);   
    text1.textContent="x";
     
    counter++
}

    else if(counter%2 > 0 && card.dataset.pressed === "false") {
    let text2 = document.createElement("p");
    card.appendChild(text2);   
    text2.textContent="o";

    counter++
}

card.dataset.pressed = true;




}


}