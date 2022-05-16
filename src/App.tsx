import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Dashboard from './pages/Dashboard'
import Users from './pages/users/Users'
import UserEdit from './pages/users/UserEdit'
import UserCreate from './pages/users/UserCreate'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Menu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Routes>
                <Route path={'/'} element={<Dashboard />} />
                <Route path={'/users'} element={<Users />} />
                <Route path={'/users/create'} element={<UserCreate />} />
                <Route path={'/users/edit/:id'} element={<UserEdit />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
