

var buttonNumber = document.querySelectorAll(".drum").length;


for (var button = 0; button < buttonNumber; button++) {
    document.querySelectorAll(".drum")[button].addEventListener("click", function() {
        var button = this.innerHTML;
        switchResults(button);
    });

}

document.addEventListener("keypress", function (event) {
    var key = event.key;
    switchResults(key);
    });





function switchResults(result) {
    switch (result) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;          
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;          
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            new Audio("sounds/crash.mp3").play();
}
    buttonAnimation(result);
}


function buttonAnimation(currKey) {
    var button = document.querySelector("." + currKey);
    
    button.classList.add("pressed");

    setTimeout ( function () {
        button.classList.remove("pressed");
    }, 100);
}



