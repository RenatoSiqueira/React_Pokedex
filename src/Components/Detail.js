import React, { useState } from 'react'

import usePokeApi from '../Utils/usePokeApi'

import Loading from './Loading'
import LoadingError from './LoadingError'

const ListGenerator = ({ url, name }, useClass) => {
    return (
        <li key={name} className={`layout-item-module ${useClass} pure-u`}>
            <a href={url}>{name}</a>
        </li>)
}

const Detail = (props) => {
    const [{ data, isLoading, isError }] = usePokeApi(`pokemon/${props.match.params.id}`, 'detail')

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <LoadingError />
    }
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div>
                <div className="posts">
                    <h1 className="content-subhead">Details of {data.name}</h1>
                    <section className="post">
                        <header className="post-header">
                            <h2 className="post-title">Photo from Pokemon.com</h2>
                        </header>

                        <div className="post-description">
                            <div className="post-images pure-g">

                                <div className="pure-u-1 center">
                                    <img alt={data.name} title={data.name} className="pure-img-responsive"
                                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.cod}.png`}
                                        width="30%" height="30%" />


                                    <div className="post-image-meta">
                                        <h3>{data.name.toUpperCase()}</h3>
                                    </div>
                                    <div>
                                        {
                                            Object
                                                .keys(data.sprites)
                                                .filter(item => data.sprites[item])
                                                .map(item => {
                                                    return (
                                                        <img
                                                            key={item}
                                                            alt="sprites of pokemon"
                                                            title="sprites of pokemon"
                                                            className="pure-img-responsive"
                                                            src={data.sprites[item]}
                                                            width="10%"
                                                            height="10%" />

                                                    )
                                                })
                                        }
                                    </div>
                                </div>

                                <div className="pure-u-1">
                                    <h3>ABILITIES</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.abilities.map(item => ListGenerator(item.ability, 'layout-item-module-base'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>MOVES</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.moves.map(item => ListGenerator(item.move, 'layout-item-module-grids'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>STATS</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.stats.map(item => ListGenerator(item.stat, 'layout-item-module-buttons'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>TYPES</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.types.map(item => ListGenerator(item.type, 'layout-item-module-tables'))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Detail