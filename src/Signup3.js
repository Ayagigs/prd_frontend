import React from "react";
import "./Signup3.css";

function Signup3() {
  return (
    <>
      {/* ==== Main container===== */}
      <main>
        <div id="main">
          <section>
            <h3>This part contains the Logics of the codes</h3>
            <h2>Terms of use</h2>
            <p className="second-text">Welcome to view</p>

            <div className="form-container">
              <p className="terms">
                Please read these Terms carefully before using the Product. By
                using the Product, you agree to be bound by these Terms and our
                Privacy Policy, which is incorporated into these Terms by
                reference. If you do not agree to these Terms, you may not use
                the Product.
              </p>
            </div>

            <div className="checkbox">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="terms"
                  value="agreed"
                  style={{ marginRight: "5px" }}
                />
                I agree to the terms
              </label>
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
              I would rather
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
    </>
  );
}

export default Signup3;
