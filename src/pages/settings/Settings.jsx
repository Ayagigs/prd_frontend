import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Avatar } from '@mantine/core';

import "./settings.scss";

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

            {/* Company Details Settings */}
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
                      <option value="">--Select--</option>
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
                      <option value="">--Select--</option>
                    </select>
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">State</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
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

            {/* Personal Info Settings */}
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

            {/* Profile Photo Settings */}
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

            {/* Password Settings */}
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

            {/* Review Settings */}
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


            {/* Performance Review Questions*/}
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Performance Review Questions</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius sapiente sed deserunt soluta iste molestiae, quibusdam adipisci.</p>
              </div>

              <form action="">
              
                <div className="inputWrapper">
                  <label htmlFor="">Question 1</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 2</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 3</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 4</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 5</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            {/* 360 Appraisal Questions*/}
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>360 Appraisal Questions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat libero facilis, consectetur aspernatur minima est molestias nostrum!</p>
              </div>

              <form action="">
              
                <div className="inputWrapper">
                  <label htmlFor="">Question 1</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 2</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 3</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 4</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 5</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            {/* Self Appraisal Questions*/}
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Self Apraisal Questions</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consectetur praesentium numquam expedita debitis. Voluptate unde quam harum.</p>
              </div>

              <form action="">
              
                <div className="inputWrapper">
                  <label htmlFor="">Question 1</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 2</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 3</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 4</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 5</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>

            {/* Competency Questions*/}
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Competency Questions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, perferendis error pariatur dicta iure maiores soluta inventore facilis!</p>
              </div>

              <form action="">
              
                <div className="inputWrapper">
                  <label htmlFor="">Question 1</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 2</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 3</label>
                  <input type="text" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 4</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="inputWrapper">
                  <label htmlFor="">Question 5</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="buttonWrapper">
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </form>
            </div>


            {/* Option Type */}
            <div className="settingsContent">
              <div className="leftSettingsContent">
                <h2>Options</h2>
                <p>Manage the performance review and appraisal of your employees by setting the required dates for each reviews</p>
              </div>

              <form action="">
                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Option 1</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Score</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>


                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Option 2</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Score</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>


                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Option 3</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Score</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Option 4</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Score</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <div className="inputContainer">
                  <div className="inputWrapper">
                    <label htmlFor="">Option 5</label>
                    <input type="text" />
                  </div>
                  <div className="inputWrapper">
                    <label htmlFor="">Score</label>
                    <select name="" id="">
                      <option value="">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
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
  
