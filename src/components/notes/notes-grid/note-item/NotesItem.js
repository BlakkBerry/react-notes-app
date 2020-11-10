import './NotesItem.css'
import React from "react";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NotesItem(props) {

    function filterDate(date) {
        const currentDate = new Date(date)

        return `${currentDate.getDate()}:${currentDate.getMonth()}:${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    }

    return (
        <div className="note p-3" style={{backgroundColor: props.note.color}}>
            <h4 className="text-center">{props.note.title}</h4>
            <p>{props.note.text}</p>
            <div className="tags mb-2">
                {props.note.tags.map((tag, idx) => {
                    return <small key={idx}
                                  className={`tag mr-2 ${tag === props.currentTag ? 'active' : ''}`}
                                  onClick={() => props.filterByTag(tag)}
                    >{tag}</small>
                })}
            </div>
            <div className="row">
                <div className="col col-9">
                    <small className="date">{filterDate(props.note.date)}</small>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faTrashAlt} className="trash" onClick={() => props.removeNote(props.note.id)}/>
                </div>
            </div>
        </div>
    );
}

export default NotesItem;