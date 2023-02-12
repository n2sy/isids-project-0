
import { useState } from 'react';
import Modal from './Modal';

export default function Todo(props) {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    function clickHandler() {
        console.log('Button clicked');
        setShowModal(true);
    }
    return (
        <>
            <div className="card">
                <h2> {props.text}</h2>
                <div className="actions">
                    <button onClick={clickHandler} className="btn">Delete</button>
                </div>
            </div>
            {/* {showModal ? <Modal></Modal> : null} */}
            {showModal && <Modal></Modal>}
        </>
    );
}

