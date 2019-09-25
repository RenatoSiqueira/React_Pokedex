import React, { useState, useEffect, useReducer } from 'react'
import Axios from 'axios'

import Sidebar from './Components/Sidebar'
import Results from './Components/AllResults'

const url = 'https://pokeapi.co/api/v2/pokemon'

const Loading = () => {
  return (
    <section className="post" >
      <header className="post-header">
        <h2 className="post-title">Loading...</h2>
      </header>
      <div className="post-description">
        <div className="post-images pure-g">
          Waiting for data response.
        </div>
      </div>
    </section>
  )
}

const reducer = (state, action) => {
  if (action.type === 'REQUEST') {
    return { ...state, loading: true }
  }
  if (action.type === 'SUCCESS') {
    return { ...state, loading: false, data: action.data }
  }
  return state
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
      .then(res => dispatch({ type: 'SUCCESS' }))
      .catch(err => dispatch({ type: 'ERROR' }))
  }, [])

  return (
    <div className="App">
      {data.loading && <Loading />}
      {!data.loading && <Sidebar />}
      <Results data={data} />
    </div>
  )
}

export default App
