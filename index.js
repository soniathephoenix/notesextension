let myNotes = [] //array to store the inputed notes
let oldNotes = [] //array to store the old inputed notes that may have been deleted from the list before
const inputEl = document.getElementById("input-el") //variable for input elements
const inputBtn = document.getElementById("input-btn") //variable for save notes button
const emailBtn = document.getElementById("email-btn") //variable for email notes button *
const ulEl = document.getElementById("ul-el") //variable for the unordered list that renders the inputed notes
const deleteBtn = document.getElementById("delete-btn") //variable for delete all button
let notesFromLocalStorage = JSON.parse( localStorage.getItem("myNotes") ) //variable for the notes stored in the local storage. Parse method used to convert string to object
console.log(notesFromLocalStorage)

//if statement, stating that if there are notes on the local storage, they will be added to the array which will be rendered to the list
if (notesFromLocalStorage) {
    myNotes = notesFromLocalStorage
    render(myNotes)
}


//function to render notes to the unordered list
function render(notes) {
    let listItems = ""
    for (let i = 0; i < notes.length; i++) {
        listItems += `
            <li>
                <p>
                    ${notes[i]}
                </p>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

//delete button event listener for a double click which will clear data in local storage, in the myNotes array and in the rendered list
deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myNotes = []
    render(myNotes)
})

//save button event listener for clicks which will push the input value to the local storage
inputBtn.addEventListener("click", function() {
    myNotes.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myNotes", JSON.stringify(myNotes) )
    notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))
    render(myNotes)
})



// email button event listener for clicks which will trigger copying the saved content to the clipboard and opening an email so content is ready to be pasted *
emailBtn.addEventListener("click", function copyText() {
    /* Copy text from storage into clipboard */
    navigator.clipboard.writeText
    (notesFromLocalStorage)
    
})