import { BrowserRouter, Route } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import { Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store/store'
import Tasks from './pages/Dashboard'
import NewTask from './pages/NewTask'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/newtask' element={<NewTask />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
