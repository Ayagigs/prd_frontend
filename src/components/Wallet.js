import React from 'react';
import Navbar from './navBar';
import Sidebar from './sideBar';
import {BsChevronDown} from 'react-icons/bs';
import citransfer from '../images/ci_transfer.png';
import Wallet from '../images/wallet.png';
import copy from '../images/copy.png';
import {Link} from 'react-router-dom';

const wallet = () =>{
    return(
        <div className='App'>
            <Navbar />
            <div className='page'>
                <Sidebar />                
                <div className='content wallet'>
                    <div className='walletHeader'>
                        <div className='walletHeader-left'>
                            <p>Current Balance</p>
                            <div>
                                <h2>223,345.00</h2>
                                <p>USDT <BsChevronDown/></p>
                            </div>
                            <h4>20.00 USD</h4>
                        </div>
                        <div className='walletHeader-right'>
                            <div>
                                <h2><img src={citransfer}/></h2>
                                <p>Send</p>
                            </div>
                            <div>
                                <h2><img src={Wallet}/></h2>
                                <p>Receive</p>
                            </div>
                            <div>
                                <h2><img src={copy}/></h2>
                                <p>Copy</p>
                            </div>
                        </div>
                    </div>
                    <div className='walletContainer'>
                        <h2>Transaction History</h2>
                        <div className='Transac-prev'>
                            <div className='Firstcol'>
                                <div className='firstrow-container'>
                                    <h1><img src={citransfer} /></h1>
                                    <div>
                                        <h2>Sent to kemik@gmail...</h2>
                                        <p>March 6, 2023. 2:30 AM</p>
                                    </div>
                                </div>
                                <div className='gray'>
                                    <div className='firstrow-container'>
                                        <h1><img src={Wallet} /></h1>
                                        <div>
                                            <h2>Received from kemik@gmail...</h2>
                                            <p>March 6, 2023. 2:30 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='firstrow-container'>
                                    <h1><img src={citransfer} /></h1>
                                    <div>
                                        <h2>Sent to kemik@gmail...</h2>
                                        <p>March 6, 2023. 2:30 AM</p>
                                    </div>
                                </div>
                                <div className='firstrow-container'>
                                    <h1><img src={citransfer} /></h1>
                                    <div>
                                        <h2>Sent to kemik@gmail...</h2>
                                        <p>March 6, 2023. 2:30 AM</p>
                                    </div>
                                </div>
                                <div className='firstrow-container'>
                                    <h1><img src={Wallet} /></h1>
                                    <div>
                                        <h2>Received from kemik@gmail...</h2>
                                        <p>March 6, 2023. 2:30 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div className='secondCol'>
                                <h2>-90.45.00 <small>USD</small></h2>
                                <div className='gray-two'>
                                    <p>+90.45.00 <small>USD</small></p>
                                </div>
                                <h2>-223.345.00 <small>USD</small></h2>
                                <h2>-223.345.00 <small>USD</small></h2>
                                <h2>-223.345.00 <small>USD</small></h2>
                            </div>
                            <div className='thirdCol'>
                                <div>
                                    <h2 className='Pending'>Pending</h2>
                                </div>
                                <div className='gray-three'>                                
                                    <h2 className='Successful'>Successful</h2>
                                </div>
                                <div>
                                    <h2 className='Cancelled'>Cancelled</h2>
                                </div>
                                <div>
                                    <h2 className='Successful'>Successful</h2>
                                </div>
                                <div>
                                    <h2 className='Successful'>Successful</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='walletLink'>
                        View all Transactions
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default wallet