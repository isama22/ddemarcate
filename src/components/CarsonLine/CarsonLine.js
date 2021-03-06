import React from 'react'
import './CarsonLine.css'
import { Link } from 'react-router-dom'

function CarsonLine({ carsonLine, handleDeleteCarsonLine, user }) {
    return (

        <div className="added-lines">
            <p>{carsonLine.text} <em className="carson-username">{carsonLine.creator}</em></p>
            <div className="line-options">

                {user._id === carsonLine.user &&
                    <Link
                        className='action-link'
                        to={{
                            pathname: '/editcarson',
                            state: { carsonLine },
                        }}>edit
                            </Link>
                }
                &nbsp;&nbsp;&nbsp;
            {user._id === carsonLine.user &&
                    <Link
                        to=""
                        className='delete'
                        onClick={() => handleDeleteCarsonLine(carsonLine._id)}
                    >
                        remove
                </Link>
                }
            </div>
        </div>

    )
}

export default CarsonLine;
