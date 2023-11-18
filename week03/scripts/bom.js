const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let chapterArray = getChapterList() || [];
console.log(chapterArray)
chapterArray.forEach(chapter => {
    displayList(chapter)
});

buttonElement.addEventListener('click', () => {
    if(inputElement.value != ''){
        displayList(inputElement.value)
        chapterArray.push(inputElement.value)
        setChapterList()
        inputElement.focus();
        inputElement.value = '';
    } else {
        inputElement.focus()
    }
});

function displayList(item){
    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    liElement.textContent = item;
    deleteButton.textContent = '❌';
    liElement.append(deleteButton);
    listElement.append(liElement)
    deleteButton.addEventListener('click', () => {
        listElement.removeChild(liElement);
        deleteChapter(liElement.textContent)
        inputElement.focus();
    })
}

function setChapterList(){
    localStorage.setItem('BOMlist', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('BOMlist'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}