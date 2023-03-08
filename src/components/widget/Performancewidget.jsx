import "./performancewidget.scss";
import LinearDeterminate from './linear';

const Performancewidget = () => {


  return (
    <div className="performancewidget">
        <div className="widget">
            <div className="left">
                <span className="title">PM Reviews</span>
        
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
                <span className="title">Self Appraisal</span>
        
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