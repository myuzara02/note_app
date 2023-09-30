import React, { Component } from 'react';

class NoteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            titleLength: 0
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }

    onTitleChangeHandler = (e) => {
        this.setState({
            title: e.target.value,
            titleLength: e.target.value.length,
        })

    };

    onBodyChangeHandler = (event) => {
        this.setState({ body: event.target.value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onAddNote(this.state)
        this.setState({ title: '', body: '', longText: 50 })


    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {50 - this.state.titleLength}</p>
                    <input
                        className="note-input__title"
                        type="text"
                        placeholder="Ini adalah judul ..."
                        required
                        value={this.state.title}
                        onChange={this.onTitleChangeHandler}
                        maxLength={50}
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        placeholder="Tuliskan catatanmu di sini ..."
                        required
                        value={this.state.body}
                        onChange={this.onBodyChangeHandler}
                    />
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
