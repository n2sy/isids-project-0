
import React from 'react'

function Modal(props) {
    console.log(props);
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button onClick={props.onNidhal} className="btn btn--alt">Cancel</button>
            <button onClick={props.onNidhal} className="btn">Confirm</button>
        </div>
    )
}

export default Modal