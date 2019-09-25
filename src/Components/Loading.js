import React from 'react'

const Loading = () => {
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <section className="post">
                <header className="post-header">
                    <h2 className="post-title">Loading...</h2>
                    <p className="post-meta">
                        Waiting for <a href="https://pokeapi.co" className="post-author">https://pokeapi.co</a> response.
            </p>
                </header>
            </section>
        </div>
    )
}

export default Loading