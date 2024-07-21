import React from 'react';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  const apiKey = "f53df53581d84d9eb86f5a8217ca49b9"
  const pageSize = 6

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} key='general' pageSize={pageSize} category='general' country='in' />}></Route>
          <Route exact path='/business' element={<News apiKey={apiKey} key='business' pageSize={pageSize} category='business' country='in' />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={apiKey} key='entertainment' pageSize={pageSize} category='entertainment' country='in' />}></Route>
          <Route exact path='/health' element={<News apiKey={apiKey} key='health' pageSize={pageSize} category='health' country='in' />}></Route>
          <Route exact path='/science' element={<News apiKey={apiKey} key='science' pageSize={pageSize} category='science' country='in' />}></Route>
          <Route exact path='/technology' element={<News apiKey={apiKey} key='technology' pageSize={pageSize} category='technology' country='in' />}></Route>
        </Routes>
      </Router >
    </div>
  )
}


export default App