import React from 'react'
import "./profiletab.scss";

const Profiletab = () => {
  return (
    <div className='tabb'> 
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
      alt='profilepicture'
      />
      <div className="profdetails">
            <p className="duedate"> Due Feb 2023</p>
            <h1 className="emp"> Frank Cortage</h1>
            <p className="post"> Senior System Analyst</p>
      </div>
       <div className='revbutton'>
          <button>
          Review Now
          </button>
        </div>     
      </div>
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
      alt='profilepicture'
      />
      <div className="profdetails">
            <p className="duedate"> Due March 2023</p>
            <h1 className="emp"> Larmie Francis</h1>
            <p className="post"> Senior System Analyst</p>
      </div>
       <div className='revbutton'>
          <button>
          Review Now
          </button>
        </div>     
      </div>
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
      alt='profilepicture'
      />
      <div className="profdetails">
            <p className="duedate"> Due July 2023</p>
            <h1 className="emp"> Bob Holland</h1>
            <p className="post"> Senior System Analyst</p>
      </div>
       <div className='revbutton'>
          <button>
          Review Now
          </button>
        </div>     
      </div>
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
      alt='profilepicture'
      />
      <div className="profdetails">
            <p className="duedate"> Due Feb 2023</p>
            <h1 className="emp"> Eric Moore</h1>
            <p className="post"> Senior System Analyst</p>
      </div>
       <div className='revbutton'>
          <button className='buttn'>
          Review Now
          </button>
        </div>     
      </div>
      
    </div>
  )
}

export default Profiletab