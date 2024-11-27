import { BrowserRouter, Route } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import { Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import store from './store/store'
import DataTable from './pages/TasksList'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/tasks' element={<DataTable />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
