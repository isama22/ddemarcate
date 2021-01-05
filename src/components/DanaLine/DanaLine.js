import React from 'react'
import { Link } from 'react-router-dom'
import './DanaLine.css';

function DanaLine({ danaLine }) {
    return (
   
        <div className="added-lines">
            <p>{danaLine.text} <em className="username">username</em></p>

        </div>

    )
}

export default DanaLine;