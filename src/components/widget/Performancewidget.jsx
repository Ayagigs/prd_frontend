import "./performancewidget.scss";
import LinearDeterminate from './linear';

const Performancewidget = () => {


  return (
    <div className="performancewidget">
        <div className="perfnumber">
            <div className="">
            <h1 className="no">4.0</h1>
            <span className="sub">Ratings</span>
            </div>  
        </div>

        <div className="widget">
            <div className="left">
                <span className="title">Performance Reviews</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>9/24 Completed (40%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">360 Appraisal</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>9/24 Completed (40%)</h1>
                </div>
            </div>
       </div>
       <div className="widget">
            <div className="left">
                <span className="title">Goal Reviews</span>
        
            <div sx={{ width: '100%' }}><LinearDeterminate /></div>
            <span className="link"></span>
        </div>
      <div className="right">
            <div className="percentage positive">
            <h1>10/24 Completed (40%)</h1>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Performancewidget