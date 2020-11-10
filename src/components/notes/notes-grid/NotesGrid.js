import React, {useState} from "react";
import Masonry from 'react-masonry-css'
import NotesItem from "./note-item/NotesItem";

function NotesGrid(props) {

    const [tag, setTag] = useState(null);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    function getFilteredNotes() {
        let notes = props.notes

        if (tag) {
            notes = notes.filter(note => note.tags.includes(tag))
        }
        if (props.titleFilter) {
            notes = notes.filter(note => note.title.toLocaleLowerCase().includes(props.titleFilter.toLocaleLowerCase()))
        }
        return notes
    }

    function changeFilterTag(newTag) {
        if (newTag !== tag) {
            setTag(newTag)
        } else {
            setTag(null)
        }
    }

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">

            {getFilteredNotes().map(note => {
                return <NotesItem key={note.id}
                                  note={note}
                                  removeNote={props.onRemove}
                                  filterByTag={changeFilterTag}
                                  currentTag={tag}/>
            })}
        </Masonry>
    );
}

export default NotesGrid;