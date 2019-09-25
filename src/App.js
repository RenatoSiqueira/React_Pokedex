import React, { useEffect, useReducer } from 'react'
import Axios from 'axios'

import Loading from './Components/Loading'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'

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

function App() {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  })
  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    Axios
      .get(url)
      .then(res => dispatch({ type: 'SUCCESS', data: res.data }))
      .catch(err => dispatch({ type: 'ERROR' }))
  }, [])

  return (
    <div className="App">
      {data.loading && <Loading />}
      {!data.loading && <Sidebar />}
      {!data.loading && <Main count={data.data.count} data={data.data} />}
    </div>
  )
}

export default App
