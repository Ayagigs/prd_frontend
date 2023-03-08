import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./wallet.scss";
// import Widget from "../../components/widget/Widget";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Wallet = () => {
    return (
      <div className="wallet">
        <Sidebar />
        <div className="walletContainer">
          <Navbar />
          
        </div>
      </div>
    );
  };
  
  export default Wallet;
  
