import React from 'react';
import Navbar from './navBar';
import Sidenav from './sideBar';

const settings = () =>{
    return(
      <div className='App'>
      <Navbar/>
      <div className='page'>
          <Sidenav />
          <div className='content'>
              <div className='settingsAdmin'>
                  <h2>AA</h2>
                  <div>
                    <h1>Adebisi Akin</h1>
                    <p>Product Manager (PM)</p>
                  </div>
              </div>
              <div className='settingsContent'>
                  <div className='settingsContent-left'>
                        <h2>Profile details</h2>
                        <p>Reset and Update your name, username, email and phone number</p>
                    </div>
                    <form>
                      <div>
                        <label>Full name</label>
                        <input placeholder='First name ---Middle name---Last name'/>
                      </div>
                      <div className='twoCol-row'>
                        <div>
                          <label>Preferred name</label>
                          <input placeholder='Mary'/>
                        </div>
                        <div>
                          <label>Employee ID</label>
                          <input placeholder='12345'/>
                        </div>
                      </div>
                      <div className='twoCol-row'>
                        <div>
                          <label>Job Title</label>
                          <input placeholder='Employment status'/>
                        </div>
                        <div>
                          <label>Email</label>
                          <input placeholder='jouv@workmail.com'/>
                        </div>
                      </div>
                      <div className='twoCol-row'>
                        <div>
                          <label>Work number</label>
                          <input placeholder='+2348 067 4839'/>
                        </div>
                        <div>
                          <label>Home number</label>
                          <input placeholder='+2348 067 4839'/>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
      </div>
  </div>
    )
}

export default settings