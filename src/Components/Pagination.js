import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ previous, next }) => {
    return (
        <div className="pure-button-group" role="group">
            {
                (previous !== 0) &&
                <Link to={`/detail/${previous}`} className="pure-button">Previous Page</Link>
            }
            {
                (next !== 0) &&
                <Link to={`/detail/${next}`} className="pure-button">Next Page</Link>
            }
        </div>
    )
}

export default Pagination