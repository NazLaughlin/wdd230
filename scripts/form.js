/* PASSWORD */

const pw1 = document.querySelector("#password")
const pw2 = document.querySelector("#confirmPassword")

pw2.addEventListener("focusout", checkSame);

function checkSame(){
    if(pw1.value !== pw2.value){
        pw2.value = "";
        pw1.value = "";
        pw1.focus();
    }
}

/* RANGE */
const rangevalue = document.getElementById("rangevalue")
const range = document.getElementById("r")

range.addEventListener('change', displayRatingValue)
range.addEventListener('input', displayRatingValue)

function displayRatingValue(){
    rangevalue.innerHTML = range.value;
}