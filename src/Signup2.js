import React from "react";
import "./Signup2.css";

function Signup2() {
  return (
    <div>
      <main>
        <div id="main">
          <section>
            <h3>This part contains the Logic</h3>
            <h2>Create an account</h2>
            <p>Welcome to view</p>
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

            <div className="buttons">
              <button className="back-Button" type="button">
                Back
              </button>
              <button className="submit-Button" type="submit">
                Next
              </button>
            </div>

            <p className="last_text">
              I would rather{" "}
              <span>
                <a href="#">Sign up</a>
              </span>
              <a className="text-back" href="#">
                &lt; Back home
              </a>
            </p>
          </section>
        </div>
        <div className="signup-image">
          {/* <img src="images/Image holder.svg" alt="Signup" /> */}
        </div>
      </main>
    </div>
  );
}

export default Signup2;
