var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[randomNumber]);
    playSound(buttonColors[randomNumber]);
    animatePress(buttonColors[randomNumber]);
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()]


$(document).click(function(event) {
    var userChosenElement = event.target.id;
    if (userChosenElement != "") {
        userClickedPattern.push(userChosenElement);
        playSound(userChosenElement);
        animatePress(userChosenElement);

    }
})

function playSound(buttonName) {
    var sound = new Audio("sounds/" + buttonName + ".mp3")
    sound.play()
}

function  animatePress(buttonName) {
    $("#" + buttonName).addClass("pressed");
    
    setTimeout(function() {
        $("#" + buttonName).removeClass("pressed");
    }, 100);
 
}q