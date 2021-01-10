import React from 'react'
import { Link } from 'react-router-dom'
import './DanaLine.css';

function DanaLine({ danaLine, handleDeleteDanaLine, user }) {
    return (

        <div className="added-lines">
            <p>{danaLine.text} <em className="username">{danaLine.creator}</em></p>
            <div className="line-options">
                {user._id === danaLine.user &&
                    <Link
                        to={{
                            pathname: '/editdana',
                            state: { danaLine },
                        }}
                    >edit
                    </Link>
                }
                &nbsp;&nbsp;&nbsp;
            {user._id === danaLine.user &&
                    <a
                        className='delete'
                        onClick={() => handleDeleteDanaLine(danaLine._id)}
                    >
                        remove
                </a>
                }
            </div>
        </div>

    )
}

export default DanaLine;