//@ts-check

import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './style.css'

/**
 * Links to homepage and about page
 * @component
 * @returns {React.ReactElement}
 */
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="" className="img_logo" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
