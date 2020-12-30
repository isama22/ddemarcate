import React from 'react'
import { Link } from 'react-router-dom'

function DanaLine({ danaLine }) {
    return (
        <>
            {/* <Link
                className="detail-link"
                to={{
                    pathname: '/detailpage',
                    state: { post }
                }}>
                <div className="post">
                    <div className="post-header">
                        <div className="author">
                            <p>{post.creator}</p>
                        </div>
                        <div className="post-title">
                        <p>{post.title}</p>
                        </div>
                        <div className="time">
                            <p>{moment(dateCreated.toLocaleString()).format('MM.DD.YYYY')}</p>
                        </div>
                    </div>
                    {post.postComments.length > 1 ?
                             <p className="comment-number">{post.postComments.length} comments</p>
                    : ''}
                    <div>
                        <p className="post-body">{post.description}</p>
                    </div>
                </div>
                
            </Link> */}
                    <p style={{backgroundColor: "blue"}}>{danaLine.text}</p>
        </>
    )
}

export default DanaLine;