const visitsDisplay = document.querySelector(".visitMessage");
const msToDays = 84600000;
const lastVisit = window.localStorage.getItem("lastVisit-NL") || null;
if (lastVisit == null){
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions";
} else {
    const daysSince = ((Date.now() - lastVisit) / msToDays)|0
    if(daysSince < 1){
        visitsDisplay.textContent = "Back so soon? Awesome!"
    } else{
        visitsDisplay.textContent = `You last visited ${daysSince} ${daysSince == 1 ? "day" : "days"} ago.`
    }
}
localStorage.setItem("lastVisit-NL", Date.now())