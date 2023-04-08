import Side from "../../components/sidebar/Side";
import Navbar from "../../components/navbar/Navbar";
import "./empwallet.scss";
import Walletbalance from "../../components/currentbalance/Walletbalance";
import History from "../../components/transactionhistory/History";
import Currentbalance from "../../../components/currentbalance/Currentbalance";

const Empwallet = () => {
    return (
      <div className="emphome">
      <Side />
      <div className="empwalletContainer">
        <Navbar />
        {/* <Walletbalance /> */}
        <Currentbalance/>
          <div>
            <h1 className="transcontainer">Transaction History</h1>
            <div className="transactiontable">
              <History />
            </div>
          </div>
      </div>
    </div>
    );
  };
  
  export default Empwallet;
  
