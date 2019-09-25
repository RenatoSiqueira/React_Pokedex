import React from 'react'
import Item from './Item'
import Pagination from './Pagination'

const addId = item => {
    const id = item.url.match(/(\d{1,3})\/$/)[1]
    item.id = id
    item.cod = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
    return item
}

const Main = ({ count, data }) => {
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
            <div>
                <div className="posts">
                    <h1 className="content-subhead">Listing All {count} Pókemons</h1>
                    <section className="post" >
                        <header className="post-header">
                            <h2 className="post-title">Photos from Pokemon.com</h2>
                        </header>
                        <div className="post-description">
                            <div className="post-images pure-g">
                                {data.results.map(item => {
                                    const { cod } = addId(item)
                                    return <Item key={item.name} name={item.name} cod={cod} />
                                })}
                            </div>
                        </div>
                        <Pagination />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Main