import React from 'react'
import { Link } from 'react-router-dom'
// import './DanaLine.css';

function DerksenLine({ derksenLine, user }) {
    return (

        <div className="added-lines">
            <p>{derksenLine.text} <em className="username">{derksenLine.creator}</em></p>
            <div className="line-options">
                {user._id === derksenLine.user &&
                    <Link
                        to={{
                            pathname: '/editderksen',
                            state: { derksenLine },
                        }}
                    >edit
                    </Link>
                }
                &nbsp;&nbsp;&nbsp;
            {/* {user._id === danaLine.user &&
                    <Link
                    to=""
                        className='delete'
                        onClick={() => handleDeleteDerksenLine(derksenLine._id)}
                    >
                        remove
                </Link>
                } */}
            </div>
        </div>

    )
}

export default DerksenLine;