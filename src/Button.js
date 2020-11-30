import React from 'react'


export default function Button() {
    const [open, setIsOpen] = React.useState(true);

    return  <button onClick={() => setIsOpen(!open)} >{open ? 'Close' : 'Open'}</button>

}