import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Perfrev from "../../components/perfrev/Perfrev";
import Profiletab from "../../components/profiletab/Profiletab";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget />
      
        </div>
        <div className="middlecont">
          <Featured />
          <Perfrev />
        </div>
        <div className="listContainer">
          <div className="tabs">
          <div className="appraisal">
          <h1>360 Appraisal</h1>
          </div>

          <div className="goalreview">
          <h1>Goal Review</h1>
          </div>

          <div className="perfreview">
          <h1>Performance Review</h1>
          </div>
          </div>
          <br />
          
        
        </div>
        <div className="viewtab">
            <Profiletab  />
         </div>
        
      </div>
    </div>
  );
};

export default Home;
