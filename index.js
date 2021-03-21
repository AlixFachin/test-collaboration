(function PrintSomethingInTheLog() {
    console.log("Everything is awesome!");
})();

function emmetAwesome(){
    const complains = [
        "There's no signs or anything. How does anyone know what to do?",
        "No, they're expecting us to show up in a Bat-Spaceship, or a pirate spaceship or a rainbow-sparkle spaceship",
        "Wear clothes. Oop! I almost forgot that one!",
        "Drink overpriced coffee!",
    ]
    return complains[Math.floor(Math.random() * complains.length)]
}

document.querySelector("#emmet_img").addEventListener("click", function(e){
    document.querySelector("#emmet_msg").innerText = emmetAwesome();
})