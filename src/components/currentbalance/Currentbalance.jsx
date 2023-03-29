import React from 'react'
import './currentbalance.scss';
import { ArrangeHorizontal } from 'iconsax-react';
import { Wallet2 } from 'iconsax-react';
import { Copy } from 'iconsax-react';


const Currentbalance = () => {
  return (
    <div>
        <div className="accountbalance">
            <div className='accountdetailsbox'>
                <p className='topdiv'>Current Balance</p>
                <p className='currentamount'>223, 345.00 
                <select className='selectcurrency'>
                  <option value="usdt">USDT</option>
                  <option value="bnb">BNB</option>
                  <option value="eth">ETH</option>
                  <option value="btc">BTC</option>
                </select>
                </p>
                <p className='fee'>20.000 USD</p>
            </div>
            <div className='clickbox'>
                    <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <ArrangeHorizontal size="32" color="#5157ed" />
                            </div>
                        <button className="sendmoneybtn">Send</button>
                        </div>
                    </div>
                    
                    <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <Wallet2 size="32" color="#02790d"/>
                            </div>
                            <button className="recievemoneybtn">Receive</button>
                        </div>
                    </div >
                    <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <Copy  size="32" color="#838387"/>
                            </div>
                            <button className="copytransbtn">Copy</button>
                        </div>
                    </div>

                
            </div>

        </div>
    </div>
  )
}

export default Currentbalance