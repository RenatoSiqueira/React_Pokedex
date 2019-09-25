import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="brand-title">Pokedex React</h1>
                <h2 className="brand-tagline">All the Pókemon data</h2>

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="pure-button" href="/">LIST ALL</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar