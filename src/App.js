import React, { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

const Home = () => {
  return (
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <h1 className="content-subhead">Home</h1>
        </div>
      </div>
    </div>
  )
}

const HomeD = () => {
  return (
    <div className="content pure-u-1 pure-u-md-3-4">
      <div>
        <div className="posts">
          <h1 className="content-subhead">Detail</h1>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [data, dispatch] = useReducer(reducer, {
    loading: true
  })
  useEffect(() => {
    dispatch({ type: 'REQUEST' })
    Axios
      .get(url)
      .then(res => dispatch({ type: 'SUCCESS', data: res.data }))
      .catch(err => dispatch({ type: 'ERROR' }))
  }, [])

  return (
    <Router>
      <div className="App">
        {data.loading && <Loading />}
        {!data.loading && <Sidebar />}
        {
          !data.loading &&
          <Route exact path='/' render={() => <Main count={data.data.count} results={data.data.results} />} />
        }
        <Route path='/detail' component={HomeD} />

        { //!data.loading && 
          //<Main count={data.data.count} data={data.data} />
        }
      </div>
    </Router>
  )
}

export default App
