colors = ['green', 'red', 'yellow', 'blue'];
gamePattern = [];
userPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber
}

var randomChosenColor = colors[randomNumber];
gamePattern.append(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);

