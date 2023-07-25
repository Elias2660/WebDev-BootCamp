var rand_1 = Math.floor(Math.random() * 6 + 1);
var rand_2 = Math.floor(Math.random() * 6 + 1);




function setValues() {
    //set first image to the rand_1 image
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + rand_1 + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + rand_2 + ".png");
}


function declareWinners() {
    if (rand_1 > rand_2) {
        document.querySelector("h1").textContent = "🏁 Player 1 Won!";
    } else if (rand_1 < rand_2) {
        document.querySelector("h1").textContent = "Player 2 Won! 🏁";
    } else {
        document.querySelector("h1").textContent = "🏁 It's a tie! 🏁";
    }

}

setValues();
declareWinners();
