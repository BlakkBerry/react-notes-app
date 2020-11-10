import React, {useState} from "react";
import './AddNote.css'
import useInputValue from "../../../hooks/useInputValue";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function AddNote({onCreate, filterContent}) {

    const [color, setColor] = useState('#D2FF94')
    const titleInput = useInputValue('')
    const tagsInput = useInputValue('')
    const textInput = useInputValue('')

    const colors = ['#D2FF94', '#ABFFF0', '#84DEFF', '#D5DEE2', '#FFFF91', '#FFD784', '#FF8D84']

    function onSubmit(event) {
        event.preventDefault()


        if (titleInput.value().trim() || textInput.value().trim()) {
            onCreate({
                title: titleInput.value(),
                tags: tagsInput.value() ? tagsInput.value().split(',').map(tag => tag.trim()) : [],
                text: textInput.value(),
                color: color
            })
        }

        titleInput.clear()
        textInput.clear()
        tagsInput.clear()
    }

    return (
        <form className="mb-5" onSubmit={onSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Default"
                       aria-describedby="inputGroup-sizing-default" placeholder="Title"
                       {...titleInput.bind}/>
                <div className="input-group-append">
                    <span className="input-group-text searchTitle btn btn-primary" onClick={() => {
                        filterContent(titleInput.value())
                    }}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </span>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Default"
                       aria-describedby="inputGroup-sizing-default" placeholder="Tags (job, lessons, shopping...)"
                       {...tagsInput.bind}/>
            </div>
            <div className="md-form amber-textarea active-amber-textarea">
                <textarea id="form22" className="md-textarea form-control" rows="3"
                          {...textInput.bind}/>

                <div className="row">
                    <div className="col">
                        <div className="colors">
                            <div className="color-palette">
                                {colors.map((noteColor, idx) => <div
                                    className={`color ${noteColor === color ? 'active' : ''}`} key={idx}
                                    style={{backgroundColor: noteColor}} onClick={() => setColor(noteColor)}/>)}
                            </div>
                        </div>
                    </div>
                    <div className="col col-1 create-col">
                        <button className="btn btn-primary create mt-2">Create</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddNote;