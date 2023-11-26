const visitsDisplay = document.querySelector(".visits");
let visitCount = Number(window.localStorage.getItem("visitCount-NL")) || 0;
if (visitCount != 0){
    visitsDisplay.textContent = visitCount;
} else {
    visitsDisplay.textContent = " Welcome first time visitor!"
}
visitCount++;
localStorage.setItem("visitCount-NL", visitCount)