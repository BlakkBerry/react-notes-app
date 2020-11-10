import './NotesPage.css'
import AddNote from "./add-note/AddNote";
import NotesGrid from "./notes-grid/NotesGrid";
import React, {useEffect, useState} from "react";
import Loader from "../main-layout/loader/Loader";


function NotesPage() {

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputFilter, setInputFilter] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(response => response.json())
            .then(notes => {
                setNotes(notes);
                setLoading(false);
            })
    }, [])

    function createNote(note) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...note,
                date: new Date()
            })
        };

        fetch("http://localhost:8000/notes", requestOptions)
            .then(response => response.json())
            .then(note => {
                setNotes(
                    notes.concat([note])
                );
            })
    }

    function removeNote(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        };

        fetch(`http://localhost:8000/notes/${id}`, requestOptions)
            .then(response => {
                setNotes(notes.filter(todo => todo.id !== id));
            })
    }

    return (
        <div className="container p-5">
            <AddNote onCreate={createNote} filterContent={setInputFilter}/>
            <div className="row flex justify-content-center">
                {loading && <Loader/>}
            </div>
            <NotesGrid notes={notes} onRemove={removeNote} titleFilter={inputFilter}/>
        </div>
    );
}

export default NotesPage;