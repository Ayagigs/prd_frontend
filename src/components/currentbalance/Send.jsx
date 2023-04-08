import React from 'react'
// import { ArrangeHorizontal } from 'iconsax-react';
import './send.scss';
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie"
import { toast } from 'react-toastify';

import ProfileImg from './profilelg.png';
// import { BsCheck } from 'react-icons/bs';
// import { FaSpinner } from 'react-icons/fa';
import { ArrangeHorizontal } from 'iconsax-react'; 
import { useState, useEffect } from 'react';

function Send() {
  // const [sendPopup, setSendPopup] = useState(false)
  // const [currentpage, setCurrentPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState('')
  const [rows, setRows] = useState([])

  useEffect(() => {
    const url = `https://pms-jq9o.onrender.com/api/v1/employee/search`
    
    axios.post(url,{
      searchParams: search
    }, {headers: {Authorization: `Bearer ${Cookies.get('Token')}`}})
    .then(res => {
    setRows(res.data.data)
    console.log(rows)
    })
  }, [])

  const sendTransaction = async () => {
    //   async function sendTransaction () {
        let params = [{
              from: "0x792e1e226a0FFdE269f27c6A61530ec2C640684A",
              to: "0xAafB51f352049cc0D2663a1F4496164C0DC03Fb3",
              gas: Number(21000).toString(16),
              gasPrice: Number(2500000).toString(16), // 10000000000000
              value: Number(1000000000000000000).toString(16),
            //   data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
            }]
       let result = await window.ethereum.request ({method: "eth_sendTransaction", params}) 
        console.error();
      }


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
                  <input type="text" list='data' style={{padding: "8px 10px", 'borderRadius': '7px',
                  border:  '1px solid gray',
                  outline: 'none', width: '100%'}}/>
                  <datalist id='data' onChange={(e) => setSearch(e.target.value)} className='datalist'>
                    {
                      rows.map((el) => {
                        return(
                          <option value={el.walletAddress}>{el.firstName + ' ' + el.lastName}</option>
                        )
                      })
                    }
                  </datalist>
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