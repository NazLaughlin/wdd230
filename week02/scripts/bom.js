const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener('click', () => {
    if(inputElement.value != ''){
        const liElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        liElement.innerHTML = inputElement.value;
        deleteButton.textContent = '❌';
        liElement.append(deleteButton);
        listElement.append(liElement)
        deleteButton.addEventListener('click', () => {
            listElement.removeChild(liElement);
            inputElement.focus();
        })
        inputElement.focus();
        inputElement.value = '';
    } else {
        inputElement.focus()
    }
});