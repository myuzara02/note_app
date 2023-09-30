import React from 'react'

const ArchiveButton = ({ id, onArchive }) => {
    return <button className="note-item__archive-button" id={id} onClick={() => onArchive(id)}>Arsipkan</button>
}

export default ArchiveButton