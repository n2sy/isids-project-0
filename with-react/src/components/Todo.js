
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo(props) {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    function clickHandler() {
        console.log('Button clicked');
        setShowModal(true);
    }

    function clickModal() {
        console.log("Click sur Modal");
        setShowModal(false);
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
            {showModal && <Modal onNidhal={clickModal}></Modal>}
            {showModal && <Backdrop onClick={clickModal}></Backdrop>}
        </>
    );
}

