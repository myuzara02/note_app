import React from 'react'

class NoteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKeyword: ''
        }
    }

    onSearchChange = (event) => {
        const keyword = event.target.value;

        this.setState({ searchKeyword: keyword })
        this.props.onSearchChange(keyword)
    }

    render() {
        return (
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input 
                    type="text" 
                    placeholder="Cari catatan ..." 
                    value={this.state.searchKeyword} 
                    onChange={this.onSearchChange} />
                </div>
            </div>
        )
    }
}

export default NoteHeader
