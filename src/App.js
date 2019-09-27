import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Detail from './Components/Detail'
import Error404 from './Components/Error404'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route exact path='/' render={() => <Main />} />
        <Route path='/detail/:id' render={(props) => <Detail {...props} />} />
        <Route path='*' render={() => <Error404 />} />
      </div>
    </Router>
  )
}

export default App
