const fs = require('fs')
const chalk = require('chalk')

// function to load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (err) {
    return []
  }
}

// function to save notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

// function to add note
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  // check if title exists
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  } else {
    console.log('note title taken!')
  }

  saveNotes(notes)
}

//function to remove notes
const removeNote = (title) => {
  const notes = loadNotes()

  const updatedNotes = notes.filter((note) => note.title != title)

  //Check if the note was actually removed or exists
  if (updatedNotes.length < notes.length) {
    console.log(chalk.green('Note was successfully removed.'))
  } else {
    console.log(chalk.red('Note does not exist.'))
  }

  saveNotes(updatedNotes)
}

const listNotes = () => {
  console.log(chalk.bold('|--- Your Notes ---|'))
  const notes = loadNotes()

  notes.forEach(note => console.log(chalk.blue.bold(note.title)))
}

const readNote = (title) => {
  const notes = loadNotes()
  const displayNote = notes.find((note) => note.title === title)

  if (displayNote) {
    console.log(chalk.green(displayNote.title))
    console.log(chalk.blue(displayNote.body))
  } else {
    console.log(chalk.red('There is not note with that title.'))
  }
}

module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
}