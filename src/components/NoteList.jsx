import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ noteDatas, onDelete, onArchive }) => {
    return (
        <>
            {noteDatas.length === 0 ? (
                <p className="notes-list__empty-message">Note is empty</p>
            ) : (
                <div className='notes-list'>
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
            )}
        </>
    )
}

export default NoteList
