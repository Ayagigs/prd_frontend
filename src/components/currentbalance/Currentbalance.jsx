import React from 'react'
import './currentbalance.scss';
import { ArrangeHorizontal } from 'iconsax-react';
import { Wallet2 } from 'iconsax-react';
import { Copy } from 'iconsax-react';


const Currentbalance = () => {
  return (
    <div>
        <div className="balance">
            <div className='firstbox'>
                <p className='topdiv'>Current Balance</p>
                <p className='middlediv'>223, 345.00 
                <select className='select'>
                  <option value="select">USDT</option>
                  <option value="Software engineer">BNB</option>
                  <option value="farmer">ETH</option>
                  <option value="entrepreneur">BTC</option>
                </select></p>
                
                <p className='bottomdiv'>20.000 USD</p>
            </div>
            <div className='secondbox'>
                <div className="transbox">
                <div className='send'>
                    <div className='sendbox'>
                    <ArrangeHorizontal size="32" color="#5157ed" />
                    </div>
                    <h2>Send</h2>
                </div>
                <div className='recieve'>
                    <div className='recievebox'>
                    <Wallet2 size="32" color="#02790d"/>
                    </div>
                    <h2>Recieve</h2>
                </div>
                <div className='copy'>
                    <div className='copybox'>
                    <Copy  size="32" color="#838387"/>
                    </div>
                    <h2>Copy</h2>
                </div>

                </div>
                
                
            </div>

        </div>
    </div>
  )
}

export default Currentbalance