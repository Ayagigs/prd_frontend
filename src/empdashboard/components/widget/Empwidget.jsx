import "./empwidget.scss";
import LinearDeterminate from './linear';
import { Copy } from 'iconsax-react';
import { ArrangeHorizontal } from 'iconsax-react';

const Empwidget = () => {


  return (
    
    <div className="empwidgets"> 
        <div className="widget">
            <div className="left">
                <span className="title">Goals</span>
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
              <h1 className="complete">40% Completed </h1>
            </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Performance Review</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1 className="complete">40% Completed</h1>
                </div>
            </div>
       </div>
       <div className="walletwidget">
          <div className="walletbal">
            <p className="amt"> $14,000.00</p>
            <p className="bal"> Wallet Balance</p>
          </div>
          <div className="walletactions">
            <div className="sendbutton">
            <ArrangeHorizontal size="32" color="#5157ed" />
              <p>Send</p>
            </div>
            <div className="recievebutton">
            <ArrangeHorizontal size="32" color="#5157ed" />
              <p>Recieve</p>
            </div>
            <div className="copybutton">
              <Copy  size="32" color="#5157ed"/>  
              <p>Copy</p>
            </div>
          </div>
      
       </div>
    </div>
  )
}

export default Empwidget