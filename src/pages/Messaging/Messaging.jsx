import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './messaging.scss'

const Messaging = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
        
        </div>
      </div>
    );
  };
  
  export default Messaging;
  

