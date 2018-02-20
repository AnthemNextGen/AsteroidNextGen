var displayStatus = document.getElementById("codeDiv");

privateButton.addEventListener('click', (event) => {
    logMessage("PRIVATE");
    toggleCodeInput("block");
    document.getElementById("startPrompt").style.padding =  "7.3% 0% 0% 0%";
});

publicButton.addEventListener('click', (event) => {
    logMessage("PUBLIC");
    toggleCodeInput("none");
    document.getElementById("codeInput").value = "";
    document.getElementById("startPrompt").style.padding =  "10% 0% 0% 0%";
});

export function logMessage(mode) {
    console.log(mode + " Button Clicked");
}

function toggleCodeInput(string) {
    displayStatus.style.display = string;
}
