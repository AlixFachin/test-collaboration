function PrintSomethingInTheLog() {
    console.log("Nyoooo! Some of your tests are failing!");
}

function miaComplains(){
    const complains = [
        "Nyoooo! Some of your tests are failing!",
        "Delete system32 pls",
        "Rule 'don't suck' violated: this is terrible",
        "I will NOT merge this PR!",
    ]
    return complains[Math.floor(Math.random() * complains.length)]
}

document.querySelector("#mia_img").addEventListener("click", function(e){
    document.querySelector("#mia_msg").innerText = miaComplains();
})