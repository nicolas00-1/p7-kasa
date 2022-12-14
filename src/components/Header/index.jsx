import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';



function Header () {

    return (
        <header>
            <img src={logo} alt="logo" className='header__logo'/>
            <nav>
                <Link to="/" className="header__link">Acceuil</Link>
                <Link to="/aboutus" className="header__link">A propos</Link>
            </nav>
        </header>
    )
}

export default Header