const chalk = require('chalk')
const note = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    description: 'List notes',
    handler() {
        const notes = note.getNotes()
        notes.forEach((note) => console.log('Title: ' +note.title))
    }

})

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            description: 'Note title'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    builder:{
        title:{
            description: 'Note title'
        }
    },
    handler(argv) {
        const noteFound = note.readNote(argv.title)
        console.log('Looking for note ' + argv.title)
        if(noteFound){
            console.log('Note found ' + JSON.stringify(noteFound));
        } else {
            console.log('Note not found');
        }
    }
})

yargs.parse()