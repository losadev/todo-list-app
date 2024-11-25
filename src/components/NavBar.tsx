import { NavLink } from "react-router"
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="menu">
      <NavLink to={'/'} className={({isActive})=> isActive ? 'active-link':''}>Home</NavLink>
      <NavLink to={'/dashboard'} className={({isActive})=> isActive ? 'active-link':''}>Dashboard</NavLink>
      <NavLink to={'/tasks'} className={({isActive})=> isActive ? 'active-link':''}>Tasks</NavLink>
      <NavLink to={'/login'} className={({isActive})=> isActive ? 'active-link':''}>Login</NavLink>
    </nav>
  )
}

export default NavBar;