import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
       
          <ul>
          <h1>Fashion Street</h1>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mens">Mens</NavLink>
            </li>
            <li>
              <NavLink to="/women">Womens</NavLink>
            </li>
            <li>
              <NavLink to="/jewellery">Jewellery</NavLink>
            </li>
            <li>
              <NavLink to="/makeup">Makeup</NavLink>
            </li>
            <li>
              <NavLink to="/electronic">Electronics</NavLink>
            </li>
            <li><button variant="login">login</button>{' '}</li>
            <li><button variant="registration">Registration</button>{' '}</li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav