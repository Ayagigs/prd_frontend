import React from 'react'
import Navbar from './navBar'
import Sidebar from './sideBar'

const Employee = ()=>{
    return(
        <div className='App'>
            <Navbar/>
            <div className='page'>
                <Sidebar/>
                <div className='content'>

                </div>
            </div>
        </div>
    )
}

export default Employee