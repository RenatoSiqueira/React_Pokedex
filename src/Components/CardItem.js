import React from 'react'

const CardItem = ({ name }) => {
    return (
        <div className="pure-u-1 pure-u-md-1-2 center">
            <a href="/pokemon/v2/1">
                <img alt="NAME" className="pure-img-responsive"
                    src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                    width="50%" height="50%" />
            </a>
            <div className="post-image-meta">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default CardItem