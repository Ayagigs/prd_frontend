import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {BsUpload} from "react-icons/bs"
import { Avatar } from '@mantine/core';

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
          <div className="settingsHeading">
            <div className="settingsImgWrap">
            <Avatar src={''} alt="Vitaly Rtishchev" color="blue" radius={100} size={150}>VR</Avatar>
            </div>
            <div className="settingsNameWrap">
              <h1>Aya & Co Ltd</h1>
              <p>Adebisi Akin (Owner)</p>
            </div>
          </div>

          <div className="settingBottom">


            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Company Details</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <form action="">
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Company Name</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Business Type</label>
                    <select name="" id="">
                      <option value=""></option>
                    </select>
                  </div>
                  
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </div>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Country</label>
                    <select name="" id="">
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">State</label>
                    <select name="" id="">
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Address</label>
                  <input type="text" />
                </div>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Number of Employees</label>
                    <select name="" id="">
                      <option value="">--Select Option--</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Reg. no</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Personal Info</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <form action="">
                <div className="inputWrapper">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Role</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Work Email</label>
                  <input type="Email" />
                </div>
                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Profile Photo Upload</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <form action="">
                <div className="inputWrapper">
                  <label htmlFor="">Profile Picture</label>
                  <input type="file" name="" id="" />
                </div>
                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Upload</button>
                </div>
              </form>
            </div>
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ea molestias repudiandae necessitatibus asperiores dolores</p>
              </div>

              <form action="">
                <div className="inputWrapper">
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" />
                </div>
                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Performance Review</h2>
                <p>Manage the performance review and appraisal of your employees by setting the required dates for each reviews</p>
              </div>

              <form action="">
              
                  <h2>Mid-Year Review</h2>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Start Date</label>
                    <input type="datetime-local" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">End Date</label>
                    <input type="datetime-local" name="" id="" />
                  </div>
                  
                </div>

                  <h2>Full-Year Review</h2>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Start Date</label>
                    <input type="datetime-local" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">End Date</label>
                    <input type="datetime-local" name="" id="" />
                  </div>
                  
                </div>

                  <h2>360 Appraisal</h2>
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Start Date</label>
                    <input type="datetime-local" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">End Date</label>
                    <input type="datetime-local" name="" id="" />
                  </div>
                  
                </div>

                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>


          </div>


        </div>
      </div>
    );
  };
  
  export default Settings;
  
