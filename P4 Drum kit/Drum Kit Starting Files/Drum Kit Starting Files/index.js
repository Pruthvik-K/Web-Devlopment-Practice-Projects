var drumButtons = document.querySelectorAll(".drum")

const audios = [new Audio("sounds/crash.mp3"),
                new Audio("sounds/kick-bass.mp3"),
                new Audio("sounds/snare.mp3"),
                new Audio("sounds/tom-1.mp3"),
                new Audio("sounds/tom-2.mp3"),
                new Audio("sounds/tom-3.mp3"),
                new Audio("sounds/tom-4.mp3")]

function makeSound(key)
{
    switch (key) {
        case "w":
                audios[0].play();
                break;
        
        case "a":
                audios[1].play();
                break;
        
        case "s":
                audios[2].play();
                break;
        
        case "d":
                audios[3].play();
                break;

        case "j":
                audios[4].play();
                break;
        
        case "k":
                audios[5].play();
                break;
        
        case "l":
                audios[6].play();
                break;
        
        default:
                console.log(key)
    }
}
for(var i = 0; i<drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey){
        
        var activeButton = document.querySelector("."+currentKey);

        activeButton.classList.add("pressed");
        setTimeout(function(){
                activeButton.classList.remove("pressed");
        }, 100);
}