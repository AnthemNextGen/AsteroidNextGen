privateButton.addEventListener ('click', (event) => {
    logMessage("PRIVATE");
});

publicButton.addEventListener ('click', (event) => {
    logMessage("PUBLIC");
});

export function logMessage(mode) {
    console.log(mode + " Button Clicked");
}
