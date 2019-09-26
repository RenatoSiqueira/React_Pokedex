import React, { useEffect, useReducer } from 'react'

import Loading from './Loading'
import LoadingError from './LoadingError'
import Pagination from './Pagination'

const reducer = (state, action) => {
    if (action.type === 'REQUEST') {
        return { ...state, loading: true }
    }
    if (action.type === 'SUCCESS') {
        return { ...state, loading: false, data: action.data }
    }
    if (action.type === 'ERROR') {
        return { ...state, loading: false, error: true }
    }
    return state
}

const addId = item => {
    const id = item.id.toString()
    item.cod = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
    return item
}

const ListGenerator = ({ url, name }, useClass) => {
    return (
        <li key={name} className={`layout-item-module ${useClass} pure-u`}>
            <a href={url}>{name}</a>
        </li>)
}

const Detail = ({ Request }) => {
    const [data, dispatch] = useReducer(reducer, {
        loading: true
    })
    useEffect(() => {
        dispatch({ type: 'REQUEST' })
        Request
            .get('pokemon/pikachu')
            .then(({ data }) => {
                data = addId(data)
                dispatch({ type: 'SUCCESS', data })
            })
            .catch(err => dispatch({ type: 'ERROR' }))
    }, [])

    if (data.loading) {
        return <Loading />
    }
    if (data.error) {
        return <LoadingError />
    }
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div>
                <div className="posts">
                    <h1 className="content-subhead">Details of {data.data.name}</h1>
                    <section className="post">
                        <header className="post-header">
                            <h2 className="post-title">Photo from Pokemon.com</h2>
                        </header>

                        <div className="post-description">
                            <div className="post-images pure-g">

                                <div className="pure-u-1 center">
                                    <img alt="{data.data.name}" className="pure-img-responsive"
                                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.data.cod}.png`}
                                        width="30%" height="30%" />


                                    <div className="post-image-meta">
                                        <h3>{data.data.name.toUpperCase()}</h3>
                                    </div>
                                    <div>
                                        {
                                            Object.keys(data.data.sprites).map(item => {
                                                return (
                                                    <img
                                                        key={item}
                                                        alt="sprites of pokemon"
                                                        className="pure-img-responsive"
                                                        src={data.data.sprites[item]}
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
                                        {data.data.abilities.map(item => ListGenerator(item.ability, 'layout-item-module-base'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>MOVES</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.data.moves.map(item => ListGenerator(item.move, 'layout-item-module-grids'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>STATS</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.data.stats.map(item => ListGenerator(item.stat, 'layout-item-module-buttons'))}
                                    </ul>
                                </div>

                                <div className="pure-u-1">
                                    <h3>TYPES</h3>
                                    <ul className="layout-item-modules pure-g">
                                        {data.data.types.map(item => ListGenerator(item.type, 'layout-item-module-tables'))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <Pagination />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Detail