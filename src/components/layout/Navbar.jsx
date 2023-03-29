import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import viewLogo from '../../assets/img/blue view logo.svg'
import navbarLinks from '../../data/navbarLinks';
import UseScroll from '../../useScroll';
import SignIn from '../../pages/SignIn';
import { useState } from 'react';

const Navbar = () => {
    const { scrollPosition } = UseScroll()
    const [popup, setPopup] = useState(false)
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
                    <Link onClick={()=> setPopup(true)} className={`login-link ${scrollPosition >= 600 ? 'scrolled' : ''}`}>Login</Link>
                    <Link to={'/demo'} className={`demo-link ${scrollPosition >= 600 ? 'scrolled' : ''}`}>Request a demo</Link>
                </div>  
            </div>
            

            <div className={popup ? "signinDiv" : "hide"} onClick={() => setPopup(false)}>
            </div>
            {
                popup ? <SignIn className="signinpopup"/> : undefined
            }
        </nav>
    );
}

export default Navbar;
