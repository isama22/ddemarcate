import React from 'react'
import { Link } from 'react-router-dom'
import './DanaLine.css';

function DanaLine({ danaLine, user }) {
    return (
   
        <div className="added-lines">
            <p>{danaLine.text} <em className="username">{danaLine.creator}</em></p>
            {user._id === danaLine.user &&
                        <Link
                            className='action-link'
                            to={{
                                pathname: '/edit',
                                state: { danaLine },
                            }}>edit
                            </Link>
                    }
        </div>

    )
}

export default DanaLine;