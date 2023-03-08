import "./goalswidget.scss";
import LinearDeterminate from './linear';

const Goalswidget = () => {


  return (
    <div className="goalswidget">
        <div className="goalsnumber">
            <div className="">
            <h1 className="no">24</h1>
            <span className="sub">Goals in total</span>
                
        </div>
      
       </div>
        <div className="widget">
            <div className="left">
                <span className="title">Completed</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>10/24 Completed (42%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">In Progress</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>4/24 Completed (16%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Overdue</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>10/24 Completed (16%)</h1>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Goalswidget