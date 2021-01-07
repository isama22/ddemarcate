import React from 'react'
import { Link } from 'react-router-dom'
import './DanaLine.css';

function DanaLine({ danaLine, handleDeleteDanaLine, user }) {
    return (

        <div className="added-lines">
            <p>{danaLine.text} <em className="username">{danaLine.creator}</em></p>
            {user._id === danaLine.user &&
                <Link
                    className='action-link'
                    to={{
                        pathname: '/editdana',
                        state: { danaLine },
                    }}>edit
                            </Link>
            }
            {user._id === danaLine.user &&
                <button
                    className='delete'
                    onClick={() => handleDeleteDanaLine(danaLine._id)}
                >
                    remove
                            </button>
            }
        </div>

    )
}

export default DanaLine;