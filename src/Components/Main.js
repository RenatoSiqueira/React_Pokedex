import React from 'react'

import Rest from '../Utils/usePokeApi'

import Loading from './Loading'
import LoadingError from './LoadingError'
import Item from './Item'

const Main = () => {
    const [{ data, isLoading, isError }] = Rest.usePokeApi('https://pokeapi.co/api/v2/pokemon')

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
                    <h1 className="content-subhead">Listing All {data.count} Pókemons</h1>
                    <section className="post" >
                        <header className="post-header">
                            <h2 className="post-title">Photos from Pokemon.com</h2>
                        </header>
                        <div className="post-description">
                            <div className="post-images pure-g">
                                {
                                    data.results.map(item => {
                                        return <Item key={item.name} name={item.name} cod={item.cod} id={item.id} />
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Main