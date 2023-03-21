import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import viewLogo from '../../assets/img/blue view logo.svg'
import navbarLinks from '../../data/navbarLinks';
import UseScroll from '../../useScroll';

const Navbar = () => {
    const { scrollPosition } = UseScroll()
    return (
        <nav className={`navbar ${scrollPosition >= 600 ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className='navbar-links'>
                    <div className="logo-container">
                        <Link to={'/'}>
                            {
                                scrollPosition >= 600 ? <img src={viewLogo} alt="" className="logo" /> : <img src={logo} alt="" className="logo" />
                            }
                        </Link>
                    </div>
                    <ul className='navbar-list-container'>
                        {
                            navbarLinks.map(({index, link}) => {
                                return (
                                    <li className={`navbar-list ${scrollPosition >= 600 ? 'scrolled' : ''}`} key={index}>
                                        <Link to={'/'}>{link}</Link>
                                    </li>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='login-links-container'>
                    <Link to={'/'} className={`login-link ${scrollPosition >= 600 ? 'scrolled' : ''}`}>Login</Link>
                    <Link to={'/'} className={`demo-link ${scrollPosition >= 600 ? 'scrolled' : ''}`}>Request a demo</Link>
                </div>  
            </div>
        </nav>
    );
}

export default Navbar;
