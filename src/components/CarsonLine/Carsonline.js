import React from 'react'
import { Link } from 'react-router-dom'
// import './CarsonLine.css';

function CarsonLine({ carsonLine, handleDeleteCarsonLine, user }) {
    return (

        <div className="added-lines">
            <p>{carsonLine.text} <em className="username">{carsonLine.creator}</em></p>
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
                <p
                    className='delete'
                    onClick={() => handleDeleteCarsonLine(carsonLine._id)}
                >
                    remove
                </p>
            }
            </div>
        </div>

    )
}

export default CarsonLine;