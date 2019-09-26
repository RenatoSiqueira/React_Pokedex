import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ name, cod }) => {
    return (
        <div className="pure-u-1 pure-u-md-1-2 center">
            <Link to={`/detail/${name}`}>
                <img alt={name} className="pure-img-responsive"
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${cod}.png`}
                    width="50%" height="50%" />
            </Link>
            <div className="post-image-meta">
                <h3>{name.toUpperCase()}</h3>
            </div>
        </div>
    )
}

export default Item