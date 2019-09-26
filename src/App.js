import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Axios from 'axios'

import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Detail from './Components/Detail'

const url = 'https://pokeapi.co/api/v2/'
const Request = Axios.create({ baseURL: url })

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path='/' render={() => <Main Request={Request} />} />
        <Route path='/detail' render={() => <Detail Request={Request} />} />
      </div>
    </Router>
  )
}

export default App
