// import React from "react";
import "./companydetails.scss";

function Signup2() {
  return (
    <div className="compdetails">
        <div className="rightcont">
            <h1 className="comp">Company Details</h1>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur.
             Purus odio porttitor dignissim orci non purus. Nunc nisi ut 
                
            </p>
        </div>
        <div className="leftcont">
         <main>
        <div id="main">
          <section>
            <div className="form-container">
              <div>
                <label className="company" For="company-input">
                  Company Name
                </label>
                <input
                  className="company-input"
                  type="text"
                  id="company-input"
                  name="Company name"
                />
              </div>
              <div>
                <label className="company" htmlFor="Business-input">
                  Business Type
                </label>
                <select id="Business-input" name="Business Type">
                  <option value="select">--select option--</option>
                  <option value="Software engineer">Software Engineer</option>
                  <option value="farmer">Farmer</option>
                  <option value="entrepreneur">Entrepreneur</option>
                </select>
              </div>
            </div>

            <div className="new-line">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="third-container">
              <div id="country">
                <label htmlFor="country">Country:</label>
                <select name="country" id="country">
                  <option value="usa">--select option--</option>
                  <option value="canada">Nigeria</option>
                  <option value="mexico">Mexico</option>
                </select>
              </div>
              <div className="state">
                <label htmlFor="state">State</label>
                <select className="select-state" name="state" id="state">
                  <option value="ny">--select option--</option>
                  <option value="ca">Edo</option>
                  <option value="tx">TX</option>
                </select>
              </div>
            </div>

            <div className="fourth-container">
              <div id="country">
                <label htmlFor="employess">Number of employees</label>
                <select name="employess" id="country">
                  <option value="1">--select option--</option>
                  <option value="2">5-20</option>
                  <option value="3">20-50</option>
                </select>
              </div>
              <div className="state2">
                <label htmlFor="Reg">Reg no.</label>
                <select className="select-state2" name="state" id="state">
                  <option value="ny">--select option--</option>
                  <option value="ca">666644</option>
                  <option value="tx">444543</option>
                </select>
              </div>
            </div>
          </section>
        </div>
        <div className="signup-image">
          {/* <img src="images/Image holder.svg" alt="Signup" /> */}
        </div>
      </main>
    </div>

    </div>
      );
}

export default Signup2;
