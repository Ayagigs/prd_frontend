import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import "./empwallet.scss";

const Empwallet = () => {
    return (
      <div className="emphome">
      <Side />
      <div className="empwalletContainer">
        <Navbar />
        <h1>Wallet page starts here</h1>        
      </div>
    </div>
    );
  };
  
  export default Empwallet;
  
