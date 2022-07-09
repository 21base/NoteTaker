const text = document.querySelector("textarea"),
addBtn = document.querySelector(".noteInput button"),
notes = document.querySelector(".notes"),
noteView = document.querySelector(".noteView"),
btnClose = document.querySelector(".noteView button"),
fullText = document.querySelector(".noteView p")

const noteData = []
let notesId = 0

addBtn.onclick = () => {
    if (text.value == '' || 
    text.value == "Type in Something...") {
        // do nothing 
    } else {
        notesId = notesId + 1
        let hold = text.value
        let textLimit = hold.split(' ')
        if (textLimit.length > 12) {
            let approveText = textLimit.slice(0, 9)
            let newText = approveText.join(" ")
            noteData.push({
                id: notesId,
                text: text.value,
                shortText: `${newText}...`
            })
        } else {
            noteData.push({
                id: notesId,
                text: text.value,
                shortText: text.value
            })
        }
        showNote()
    }
    text.value = "Type in Something..."
}

function showNote() {
    noteData.map(noteList => {
        if (noteList.id == notesId) {
            let noted = document.createElement("div")
            noted.classList.add("noted")

            let note = document.createElement("p")
            let theNote = document.createTextNode(noteList.shortText)
            note.appendChild(theNote)

            let viewNote = document.createElement("button")
            viewNote.setAttribute("onclick", "viewNote(this)")
            viewNote.setAttribute("id", noteList.id)
            viewNote.innerHTML = "View Note"

            // append all 
            noted.appendChild(note)
            noted.appendChild(viewNote)

            notes.appendChild(noted)
        } 
    })
}

function viewNote(id) {
    idList = id.getAttribute("id")
    noteData.map(list => {
        if (list.id == idList) {
            noteView.style.display = "block"
            fullText.innerHTML = list.text
        }
    })
}

btnClose.onclick = () => {
    noteView.style.display = "none"
}

// Copyright 2022 21base 