import React from 'react'

import { getInitialData, showFormattedDate } from '../utils'

import NoteHeader from './NoteHeader'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import NoteArsip from './NoteArsip'

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteDatas: getInitialData(),
            searchKeyword: '',
            archivedNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }


    onArchiveHandler = (id) => {
        const updatedNotes = this.state.noteDatas.map((note) =>
            note.id === id ? { ...note, archived: true } : note
        );
        const archivedNote = this.state.noteDatas.find((note) => note.id === id);

        this.setState((prevState) => ({
            noteDatas: updatedNotes,
            archivedNotes: [
                ...prevState.archivedNotes,
                {
                    id: archivedNote.id,
                    title: archivedNote.title,
                    date: archivedNote.date,
                    body: archivedNote.body,
                    archived: true,
                    createdAt: showFormattedDate(new Date()),
                },
            ],
        }));
    }

    onSearchChange = (event) => {
        const searchKeyword = event.target.value;
        this.setState({ searchKeyword });
    }

    onDeleteHandler(id) {
        const noteDatas = this.state.noteDatas.filter(noteData => noteData.id !== id)
        this.setState({ noteDatas })
    }

    onAddNoteHandler({ title, body, date }) {
        this.setState((prevState) => {
            return {
                noteDatas: [
                    ...prevState.noteDatas,
                    {
                        id: +new Date(),
                        title,
                        date,
                        body,
                        archived: false,
                        createdAt: showFormattedDate(new Date()),
                    }
                ]
            }
        })
    }

    render() {
        const { noteDatas, searchKeyword, archivedNotes } = this.state;

        const filteredNotes = noteDatas.filter((note) =>
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );


        return (
            <div>
                <NoteHeader onSearchChange={(keyword) => this.setState({ searchKeyword: keyword })} />
                <div className="note-app__body">
                    <NoteInput onAddNote={(note) => this.onAddNoteHandler(note)} />

                    <h2>Catatan Aktif</h2>
                    <NoteList noteDatas={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchive} />

                    <h2>Arsip</h2>
                    <NoteArsip archivedNotes={archivedNotes} />
                </div>
            </div>
        )
    }
}

export default NoteApp