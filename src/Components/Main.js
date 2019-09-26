import React, { useEffect, useReducer } from 'react'

import Loading from './Loading'
import LoadingError from './LoadingError'
import Item from './Item'
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
    const id = item.url.match(/(\d{1,3})\/$/)[1]
    item.id = id
    item.cod = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
    return item
}


const Main = ({ Request }) => {
    const [data, dispatch] = useReducer(reducer, {
        loading: true
    })
    useEffect(() => {
        dispatch({ type: 'REQUEST' })
        const fecthData = async () => {
            try {
                const { data } = await Request.get('pokemon')
                dispatch({ type: 'SUCCESS', data })
            } catch (err) {
                dispatch({ type: 'ERROR' })
            }
        }
        fecthData()
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
                    <h1 className="content-subhead">Listing All {data.count} Pókemons</h1>
                    <section className="post" >
                        <header className="post-header">
                            <h2 className="post-title">Photos from Pokemon.com</h2>
                        </header>
                        <div className="post-description">
                            <div className="post-images pure-g">
                                {
                                    data.data.results.map(item => {
                                        const { cod } = addId(item)
                                        return <Item key={item.name} name={item.name} cod={cod} />
                                    })
                                }
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