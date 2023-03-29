import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./wallet.scss";
import Currentbalance from "../../components/currentbalance/Currentbalance";
import Transactionhistory from "../../components/transactionhistory/Transactionhistory";
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Wallet = () => {
    return (
      <div className="adminwallet">
        <Sidebar />
        <Navbar />
        <div className="walletContainer">
          <Currentbalance />
          <div>
            <h1 className="transcontainer">Transaction History</h1>
            <div className="transactiontable">
              <Transactionhistory />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Wallet;
  
