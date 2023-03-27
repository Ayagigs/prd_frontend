import React from 'react';
import logo from '../images/logo.svg';
import { CiSearch } from 'react-icons/ci';

const navBar = () =>{
    return(
        <nav>
            <img src={logo} alt= 'logo' />
            <div className='Employee-search'>
                <CiSearch className='home'/>
                <input placeholder='Search by:employee: Jane or goal: find fish' type={'text'}/>
            </div>
            <div className='Aya-and-co'>
                <h1>CG</h1>
                <h2>Charles Godfrey</h2>
            </div>
        </nav>
    )
}

export default navBar