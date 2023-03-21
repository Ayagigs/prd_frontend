import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import "./settings.scss";
import Signup2 from "../../components/companydetails/Companydetails";
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Settings = () => {
    return (
      <div className="home1">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="items">
           <div className="item profile prof">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            <div className="details">
            <p className="org">Aya and Co</p>
            <p className="name"> Adebisi Akin (Owner)</p>
            </div>
          </div>
        </div>
        <div className="moreinfo">
         <Signup2 />

        </div>
        <div>
          
        </div>
        </div>
      </div>
    );
  };
  
  export default Settings;
  
