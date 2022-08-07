let browser = prompt('What is your browser?')

if (browser === null || browser.trim() === "") {
    alert('Please answer correctly')
} else if (browser === "Edge") {
    alert("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Opera" || browser === "Firefox" || browser === "Safari") {
    alert("Okay we support these brosers too");
} else {
    alert("We hope that this pafe looks ok!");
}