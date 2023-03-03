import React from 'react';
import { Link } from 'react-router-dom';
import { companyLinks, resourcesLinks, solutionsLinks } from '../../../data/footerLinks';

const FooterLinks = () => {
    return (
        <div className='footer-links-container'>
            <ul className='footer-links-list'>
                <li className='footer-link-heading'>
                    <h1>Company</h1>
                </li>
                {
                    companyLinks.map((item, index) => {
                        return(
                            <div>
                                <li key={index} >
                                    <Link to={'/'} className="footer-link">
                                        {item}
                                    </Link>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
            <ul className='footer-links-list'>
                <li className='footer-link-heading'><h1>Resources</h1></li>
                {
                    resourcesLinks.map((item, index) => {
                        return(
                            <div>
                                <li key={index}>
                                    <Link to={'/'} className="footer-link">
                                        {item}
                                    </Link>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
            <ul className='footer-links-list'>
                <li className='footer-link-heading'>
                    <h1>Solutions</h1>
                </li>
                {
                    solutionsLinks.map((item, index) => {
                        return(
                            <div>
                                <li key={index}>
                                    <Link to={'/'} className="footer-link">
                                        {item}
                                    </Link>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default FooterLinks;
