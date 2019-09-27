import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Detail from './Components/Detail'
import Error404 from './Components/Error404'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/detail/:id' render={(props) => <Detail {...props} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
