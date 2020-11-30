import React from 'react';
import './Container.css';
import './Sidebar.css';
import Sidebar from './Sidebar'
import Canvas from './Canvas'
import { Twirl as Hamburger } from 'hamburger-react';


export default function Container() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [canvas, setCanvas] = React.useState({type:"iframe", ressource:"https://s3.eu-west-1.amazonaws.com/media.habiteo.com/models/z/zwP5R4LUk6lCQM0ZZGepu/general/0001.jpg"})

    const setIdVideo = (idVideo) => {
        setCanvas({type:"youtube", ressource:idVideo})
    }

    const setUrl = (url) => {
        setCanvas({type:"iframe", ressource:url})
    }

    return (
        <div id="container">
            <Canvas canvas={canvas} />

            <div className="hamburger-menu" style={{ right: isOpen ? 200 : 130, border: isOpen ? "none" : "solid 1px", zIndex: 1 }} >
                <Hamburger className="btn" toggled={isOpen} toggle={() => setIsOpen(!isOpen)}  size={20} duration={0.8} />
            </div>

            <Sidebar isOpen={isOpen} setUrl={setUrl} setIdVideo={setIdVideo} />
        </div>
    )
}





