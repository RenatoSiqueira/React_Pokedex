import React from 'react'

const Pagination = () => {
    return (
        <div className="pure-button-group" role="group">
            <a href="/list/v2?pag=1" className="pure-button">Previous Page</a>
            <a href="/list/v2?pag=2" className="pure-button">Next Page</a>
        </div>
    )
}

export default Pagination