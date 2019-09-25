import React, { useState, useEffect, useReducer } from 'react'
import Axios from 'axios'

import Loading from './Components/Loading'
import Sidebar from './Components/Sidebar'
import Results from './Components/AllResults'

const url = 'https://pokeapi.co/api/v2/pokemon'

const reducer = (state, action) => {
  if (action.type === 'REQUEST') {
    return { ...state, loading: true }
  }
  if (action.type === 'SUCCESS') {
    return { ...state, loading: false, data: action.data }
  }
  return state
}

const Main = ({ count }) => {
  return (
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <h1 className="content-subhead">Listing All {count} Pókemons</h1>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    counter: 0,
    data: {}
  })
  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    Axios
      .get(url)
      .then(res => {
        console.log(res)
        dispatch({ type: 'SUCCESS' })
      })
      .catch(err => dispatch({ type: 'ERROR' }))
  }, [])

  return (
    <div className="App">
      {data.loading && <Loading />}
      {!data.loading && <Sidebar />}
    </div>
  )
}

export default App
