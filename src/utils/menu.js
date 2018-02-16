export const privateButton = document.getElementById('privateButton');


export function logMessage() {
    alert("Private Button Clicked");
}

privateButton.addEventListener ('click', (event) => {
    logMessage();
});