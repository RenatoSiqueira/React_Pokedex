import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Detail from './Components/Detail'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path='/' render={() => <Main />} />
        <Route path='/detail/:id' render={(props) => <Detail {...props} />} />
      </div>
    </Router>
  )
}

export default App
