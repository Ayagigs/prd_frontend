import React from 'react';
import footerIcons from '../../data/footerIcons';
import logo from '../../assets/img/secondlogo.svg'
import FooterLinks from '../container/footer/FooterLinks';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="" />
                <div className='footer-icon-container'>
                    {
                        footerIcons.map(({index, icon}) => {
                            return(
                                <span className="footer-icon-bg" key={index}><img src={icon} alt="" /></span>
                            )
                        })
                    }
                </div>
                <p className='active-years'>2009-2023</p>
            </div>
            <FooterLinks />
        </footer>
    );
}

export default Footer;
