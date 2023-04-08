import React from 'react'
// import { ArrangeHorizontal } from 'iconsax-react';
import './send.scss';
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileImg from './profilelg.png';
// import { BsCheck } from 'react-icons/bs';
// import { FaSpinner } from 'react-icons/fa';
import { ArrangeHorizontal } from 'iconsax-react'; 

function Send() {
  // const [sendPopup, setSendPopup] = useState(false)
  // const [currentpage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='sendfundwrapper'>
        <div className="sendpage"> 
            <div className="sendtopcont">
            <Link to="/wallet" style={{ textDecoration: "none" }}>
          {/* <button className="closesend-btn">X</button> */}
          </Link>
          <div className='senderprofile'> 
          <img src={ProfileImg}  width={20} alt="" className="image" />
          <h1>Christian Apithy</h1>
          </div>
            </div>
             <hr />

             <form claclassName='sendform'>
              <div  className='sendformWrapper'>
                <div className="formHeading">
                  <h1>Send to</h1>
                </div>

                <div className='sendlogo'>
                    <ArrangeHorizontal size="32" color="#5157ed" />
                </div>
                <div className="sendinputWrapper">
                  <label  htmlFor="">Recipient ID</label>
                  <input
                    className='sendforminput'
                    type="text"
                    required
                    name="address"
                    id="address"
                    placeholder="Wallet Address"
                  />
                </div>
                <div className="sendinputWrapper">
                    <label htmlFor="">Currency</label>

                    <select
                    className='sendforminput'
                      name="crptocurrency"
                      id="crptocurrency"
                    >
                      <option>USDT</option>
                      <option>BTC</option>
                      <option>BNB</option>
                      <option>MATIC</option>
                      <option>ETH</option>
                    </select>
                  </div>

                <div className="sendinputWrapper">
                  <label  htmlFor="">Amount</label>
                  <input
                    type="text"
                    className='sendforminput'
                    required
                    name="amount"
                    id="amount"
                    placeholder="Enter Amount"
                  />
                </div>
              </div>
              <button className='sendcoinbtn'>Send now</button>
          </form>
          


            {/* <div className="progressbox">
              <div className="sendpro">
                <p>Send</p>
              </div>
              <hr clas />
              <div className='confirmpro'> Confirm</div>
            </div> */}

            

            {/* <div className="sendwrapper">
          <div className="sendstepperWrapper">
            <div className="sendstepperCardWrapper">
              <div
                className={`stepperCard ${
                  currentpage >= 1 ? 'active' : undefined
                }`}
              >
                <div className="number ">
                  <p>{currentpage <= 1 ? '1' : <BsCheck />}</p>
                  <div className="line"></div>
                </div>
                <p>Send</p>
              </div>

              <div
                className={`stepperCard ${
                  currentpage >= 2 ? 'active' : undefined
                }`}
              >
                <div className="number">
                  <p>{currentpage <= 2 ? '2' : <BsCheck />}</p>
                  <div className="line"></div>
                </div>
                <p>Confirm</p>
              </div>
            </div>

            <form onSubmit={''}>
              <div className={currentpage === 1 ? 'sendformWrapper' : 'hide'}>
                <div className="sendinputWrapper">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    placeholder="Please Enter Your Firstname"
                  />
                </div>
                <div className="sendinputWrapper">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    id="lastName"
                    placeholder="Please Enter Your Lastname"
                  />
                </div>
                <div className="sendinputWrapper">
                  <label htmlFor="">Work Email</label>
                  <input
                    type="text"
                    required
                    name="email"
                    id="email"
                    placeholder="Please Enter Your Email"
                  />
                </div>
              </div>

              <div className={currentpage === 2 ? 'sendformWrapper' : 'hide'}>
                <div className="formHeading">
                  <h1>Send to</h1>
                </div>

                <div className="sendinputWrapper">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    placeholder="Please Enter Your Firstname"
                  />
                </div>
                
                <div className="sendinputWrapper">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    placeholder="Please Enter Your Firstname"
                  />
                </div>
                
                <div className="sendinputWrapper">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    id="firstName"
                    placeholder="Please Enter Your Firstname"
                  />
                </div>
              </div>

            </form>
            
            <div className="buttonWrapper">
                <button
                  type="button"
                  // disabled={isSubmitting}
                  onClick={() =>
                    setCurrentPage(currentpage > 1 ? currentpage - 1 : 1)
                  }
                >
                  Back
                </button>
                {currentpage < 2 ? (
                  <button
                    type="button"
                    // disabled={isSubmitting}
                    onClick={() =>
                      setCurrentPage(currentpage < 2 ? currentpage + 1 : 3)
                    }
                    // disabled={Array.from(
                    //   document.querySelectorAll('input[required]')
                    // ).some(el => !el.value)}
                  >
                    Send
                  </button>
                ) : (
                  <button type="button" >
                    {isLoading ? (
                      <>
                        <FaSpinner className="fa-spin" />
                        &nbsp;Sending
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                )}
              </div>


          </div>
        </div> */}


        </div>
    </div> 
  )
}
export default Send