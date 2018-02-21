const displayStatus = document.getElementById("codeDiv");
const enterPrompt = "Press ENTER to Start"

privateButton.addEventListener('click', (event) => {
    logMessage("PRIVATE");
    toggleCodeInput("block");
    document.getElementById("codeInput").focus();
    changePromptID("enterPrompt");
    document.getElementById("enterPrompt").style.padding = "7.3% 0% 0% 0%";
    document.getElementById("enterPrompt").innerHTML = "Press ENTER to Start"
    document.getElementById("menuShipPublic").style.display = "none";
    document.getElementById("menuShipPrivate").style.display = "block";
});

publicButton.addEventListener('click', (event) => {
    logMessage("PUBLIC");
    toggleCodeInput("none");
    document.getElementById("codeInput").value = "";
    changePromptID("enterPrompt");
    document.getElementById("enterPrompt").style.padding = "10% 0% 0% 0%";
    document.getElementById("enterPrompt").innerHTML = enterPrompt;
    document.getElementById("menuShipPublic").style.display = "block";
    document.getElementById("menuShipPrivate").style.display = "none";

});

export function logMessage(mode) {
    console.log(mode + " Button Clicked");
}

function toggleCodeInput(string) {
    displayStatus.style.display = string;
}

function changePromptID(id) {
    if (document.getElementById("startPrompt")) {
        document.getElementById("startPrompt").id = id;
    }
}