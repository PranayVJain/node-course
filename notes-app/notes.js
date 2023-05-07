const { debug } = require('console')
const fs = require('fs')

const getNotes = () => loadNotes()

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(JSON.stringify(notes));
    } else {
        console.log('Note already taken')
    }

}

const saveNotes = (notes) => fs.writeFileSync('notes.json', notes)


const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const notesJson = JSON.parse(notesBuffer.toString())
        return notesJson;
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    console.log('Note to remove ' + title)
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title)
    console.log('Filtered notes ', filteredNotes)
    saveNotes(JSON.stringify(filteredNotes))
}

const readNote = (title) => {
    const notes = loadNotes()
    debugger
    const note = notes.find((note) => note.title === title)
    console.log('Note value found . The ', note)
    return note;
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}