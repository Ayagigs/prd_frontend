import React from 'react'
import "./profiletab.scss";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';

const Profiletab = () => {
  return (
    <div className='tabb'>
       <Link to="/emp-dashboard/appraisal/appraisal360" style={{ textDecoration: "none" }}>
       <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
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
      </Link> 
      
      <Link to="" style={{ textDecoration: "none" }}>
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg"
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
      </Link>
      
      <Link to="" style={{ textDecoration: "none" }}>
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
      </Link>
      
      <Link to="" style={{ textDecoration: "none" }}>
      <div className='proftabs'>
      <img 
      className="profimg"
      src="https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg"
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
      </Link>
      
      
    </div>
  )
}

export default Profiletab