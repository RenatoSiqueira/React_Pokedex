import React from 'react'
import Results from './results'

const AllResults = ({ count, data }) => {
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div>
                <div className="posts">
                    <h1 className="content-subhead">Listing All {count} Pókemons</h1>
                    <Results data={data} />
                </div>
            </div>
        </div>
    )
}

export default AllResults