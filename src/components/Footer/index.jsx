import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-white.svg'
import './style.css'

function Footer() {
  return (
    <footer className="footerContainer">
      <div>
        <Link to="/">
          <img className="homeLogo" src={Logo} alt="Kasa" />
        </Link>
      </div>
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
