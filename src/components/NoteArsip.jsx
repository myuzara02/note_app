import React from 'react'
import NoteList from './NoteList'

const NoteArsip = ({ archivedNotes }) => {
    return (
        <NoteList noteDatas={archivedNotes} onArchive={() => { }} />
    )
}

export default NoteArsip