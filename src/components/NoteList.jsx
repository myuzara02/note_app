import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ noteDatas, onDelete, onArchive }) => {
    return (
        <div className="notes-list">
            {  
                noteDatas.map((noteData) => (
                    <NoteItem
                        key={noteData.id}
                        id={noteData.id}
                        onDelete={onDelete}
                        onArchive={onArchive}

                        {...noteData}
                    />

                ))
            }
        </div>
    )
}

export default NoteList