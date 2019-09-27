import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <section className="post">
                <header className="post-header">
                    <h2 className="post-title">Error 404 - Not Found</h2>
                    <p className="post-meta">
                        Sorry, but this page doesn´t exists. <Link to={'/'}>Try Again?</Link>
                    </p>
                </header>
            </section>
        </div>
    )
}

export default Error404