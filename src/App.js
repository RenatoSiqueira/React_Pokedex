import React from 'react'
import Sidebar from './Sidebar'
import Pagination from './Pagination'
import Post from './Post'

function App() {
  return (
    <div className="App">
      <div id="layout" className="pure-g">
        <Sidebar />
        <div className="content pure-u-1 pure-u-md-3-4">
          <div>
            <div className="posts">
              <h1 className="content-subhead">Listing All 90898 Pókemons</h1>
              <Post />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
