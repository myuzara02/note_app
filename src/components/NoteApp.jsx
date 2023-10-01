import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteDatas: getInitialData(),
            searchKeyword: '',
        }

        // Bind methods
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onSearchChange = (event) => {
        const searchKeyword = event.target.value;
        this.setState({ searchKeyword });
    }

    onDeleteHandler(id) {
        const noteDatas = this.state.noteDatas.filter(noteData => noteData.id !== id);
        this.setState({ noteDatas });
    }

    onArchiveHandler(id) {
        const updatedNotes = this.state.noteDatas.map((note) => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });

        this.setState({ noteDatas: updatedNotes });
    }

    onAddNoteHandler({ title, body, date }) {
        this.setState((prevState) => {
            return {
                noteDatas: [
                    ...prevState.noteDatas,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date(),
                    }
                ]
            }
        })
    }

    render() {
        const { noteDatas, searchKeyword } = this.state;

        // Filter active and archived notes
        const activeNotes = noteDatas.filter((note) => !note.archived);
        const archivedNotes = noteDatas.filter((note) => note.archived);

        const filteredNotes = activeNotes.filter((note) =>
            note.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        return (
            <div>
                <NoteHeader onSearchChange={(keyword) => this.setState({ searchKeyword: keyword })} />
                <div className="note-app__body">
                    <NoteInput onAddNote={(note) => this.onAddNoteHandler(note)} />

                    <h2>Catatan Aktif</h2>
                    <NoteList noteDatas={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

                    <h2>Arsip</h2>
                    <NoteList noteDatas={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        )
    }
}

export default NoteApp;
