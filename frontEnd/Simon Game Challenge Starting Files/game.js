var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;


$(document).keypress(function () {
    if (level == 0) {
        nextSequence();
    }
});

$(document).click(function (event) {
    /*
        ON A CLICK
        */
    if (level != 0) {
        var userChosenElement = event.target.id; //get the id of the element, including the button num
        if (userChosenElement != "") {
            //of the chosen element is a button

            userClickedPattern.push(userChosenElement); //add things to series

            playSound(userChosenElement);
            animatePress(userChosenElement);
            //to see if the right step was made and add next sequence
            setTimeout(
                checkAnswer(level), 200
            );
        }
    }
});

function checkAnswer(level) {
    /*
      Checking if the sequence is correct 
      */
    if (userClickedPattern[userClickedPattern.length - 1] == gamePattern[userClickedPattern.length - 1]) {
        //if the clicked is correct

        if (userClickedPattern.length == gamePattern.length) {
            //if the sequence was followed completely
            if (userClickedPattern.length == gamePattern.length) {
                setTimeout(nextSequence(), 100);

                userClickedPattern = [];
            } 
        }
    } 
    else {
        //if not correct
        wrongEffects();
        startOver()
    }
}

function playSound(buttonName) {
    var sound = new Audio("sounds/" + buttonName + ".mp3");
    sound.play();
}

function animatePress(buttonName) {
    $("#" + buttonName).addClass("pressed");

    setTimeout(function () {
        $("#" + buttonName).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(buttonColors[randomNumber]);
    playSound(buttonColors[randomNumber]);
    animatePress(buttonColors[randomNumber]);
    animatePress(buttonColors[randomNumber]);
    animatePress(buttonColors[randomNumber]);

}


function wrongEffects() {
    $("body").addClass("game-over");
    var wrongMP3 = new Audio("./sounds/wrong.mp3");
    wrongMP3.play();

    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 2000);
}

function startOver() {
    //reset variables
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $("h1").text( "Press A Key to Start")
}