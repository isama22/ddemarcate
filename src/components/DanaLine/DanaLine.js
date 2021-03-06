import React from 'react'
import { Link } from 'react-router-dom'
import './DanaLine.css';

function DanaLine({ danaLine, handleDeleteDanaLine, user }) {
    return (

        <div className="added-lines">
            <p>{danaLine.text}&nbsp;&nbsp;<em className="username">{danaLine.creator}</em></p>
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
                    <Link
                        to=""
                        className='delete'
                        onClick={() => handleDeleteDanaLine(danaLine._id)}
                    >
                        remove
                    </Link>
                }
            </div>
        </div>

    )
}

export default DanaLine;