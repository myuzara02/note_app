import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ noteDatas, onDelete, onArchive }) => {
    return (
        <div className="notes-list">
            {noteDatas.length === 0 ? (
                <p>Note is empty</p>
            ) : (
                noteDatas.map((noteData) => (
                    <NoteItem
                        key={noteData.id}
                        id={noteData.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...noteData}
                    />
                ))
            )}
        </div>
    )
}

export default NoteList