

import React from 'react'

function Backdrop(props) {
    console.log(props);
    return (
        <div onClick={props.onClick} className='backdrop'></div>
    )
}

export default Backdrop