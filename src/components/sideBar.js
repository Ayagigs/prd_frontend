import React from 'react';
import { sideBarData } from './SidebarData';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return(
        <div className='sidebar'>
            {sideBarData.map((item, key) =>{
                return(
                    <Link className='sidebarItem' id={window.location.pathname === item.path ? 'selected' : ''} to={ item.path }>
                        {item.icon}<h2>{item.title}</h2>
                    </Link>
                )
            })}
            <div className='Admin'>
                <h2>AA</h2>
                <div className='admin-description'>
                    <p>Aya & Co. Ltd</p>
                    <h1>Admin</h1>
                </div>
                <BsThreeDotsVertical className='Dots'/>
            </div>
        </div>
    )
}

export default Sidenav