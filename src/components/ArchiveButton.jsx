import React from 'react'

const ArchiveButton = ({ id, onArchive, archived }) => {
    return <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}>
            {archived === true ? "Pindahkan" : "Arsipkan"}
        </button>
}

export default ArchiveButton