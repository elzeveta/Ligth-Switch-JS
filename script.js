const buttonOn = document.querySelector(".turn-on");
const buttonOff = document.querySelector(".turn-off");
const bulbImage = document.querySelector("img");

buttonOn.addEventListener("click", function(){
    bulbImage.setAttribute("src", "./images/lighton.png");
    buttonOff.innerHTML = "Turn off bulb";
    buttonOn.disabled = true;
    buttonOff.disabled = false;
})
buttonOff.addEventListener("click", function(){
    bulbImage.setAttribute("src", "./images/lightoff.png");
    buttonOn.innerHTML = "Turn on bulb";
    buttonOff.disabled = true;
    buttonOn.disabled = false;
})