import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import "./empsettings.scss";

const Empsettings = () => {
    return (
      <div className="emphome">
      <Side />
      <div className="empsettingsContainer">
        <Navbar />
        <h1>Settings page here</h1>        
      </div>
    </div>
    );
  };
  
  export default Empsettings;
  
