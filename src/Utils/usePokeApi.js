import { useState, useEffect } from 'react'
import Axios from 'axios'

const addId = (item, Type = 'Main') => {
    const id = Type === 'detail' ? item.id.toString() : item.url.match(/(\d{1,3})\/$/)[1]
    if (Type !== 'detail')
        item.id = id
    item.cod = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
    return item
}

const init = Url => {
    const usePokeApi = (Type) => {
        const [data, setData] = useState({})
        const [url] = useState(Url)
        const [isLoading, setIsLoading] = useState(true)
        const [isError, setIsError] = useState(false)
        useEffect(() => {
            const fecthData = async () => {
                setIsError(false)
                setIsLoading(true)
                try {
                    let { data } = await Axios.get(url)

                    if (Type === 'detail')
                        addId(data, Type)
                    else
                        data.results = data.results.map(item => addId(item))

                    setData(data)
                } catch (err) {
                    setIsError(true)
                }
                setIsLoading(false)
            }
            fecthData()
        }, [url])
        return [{ data, isLoading, isError }]
    }
    return {
        usePokeApi
    }
}

export default init