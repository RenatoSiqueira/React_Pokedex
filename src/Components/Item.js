import React from 'react'

const Item = ({ name, cod }) => {
    return (
        <div className="pure-u-1 pure-u-md-1-2 center">
            <a href="/pokemon/v2/1">
                <img alt="NAME" className="pure-img-responsive"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${cod}.png`}
                    width="50%" height="50%" />
            </a>
            <div className="post-image-meta">
                <h3>{name.toUpperCase()}</h3>
            </div>
        </div>
    )
}

export default Item