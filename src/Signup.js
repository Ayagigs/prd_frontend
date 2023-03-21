import React from "react";
import Signup3 from "./Signup3";

import "./Signup.css";
import "./Signup2.css";

import imageHolder from "./images/Image-holder.svg";

import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}

function Signup() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="signup-container">
      {" "}
      <div className="signup-info">
        {" "}
        <>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="First step" description="Create an account">
              <h2>Create an account</h2> <p>Welcome to view</p>{" "}
              <form>
                {" "}
                <label>
                  {" "}
                  First Name: <input type="text" name="firstName" />{" "}
                </label>{" "}
                <label>
                  {" "}
                  Last Name: <input type="text" name="lastName" />{" "}
                </label>{" "}
                <label>
                  {" "}
                  Work Email: <input type="email" name="workEmail" />{" "}
                </label>{" "}
                <label>
                  {" "}
                  Password: <input type="password" name="password" />{" "}
                </label>{" "}
                {/* <div className="buttons">
                  {" "}
                  <button className="back-Button" type="button">
                    {" "}
                    Back{" "}
                  </button>{" "}
                  <button className="submit-Button" type="submit">
                    {" "}
                    Next{" "}
                  </button>{" "}
                </div>{" "} */}
              </form>{" "}
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email">
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
                      <option value="Software engineer">
                        Software Engineer
                      </option>
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

                {/* <div className="buttons">
                  <button className="back-Button" type="button">
                    Back
                  </button>
                  <button className="submit-Button" type="submit">
                    Next
                  </button>
                </div> */}

                {/* <p className="last_text">
                  I would rather{" "}
                  <span>
                    <a href="#">Sign up</a>
                  </span>
                  <a className="text-back" href="#">
                    &lt; Back home
                  </a>
                </p> */}
              </section>
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
              <Signup3 />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
          <p className="last_text">
            {" "}
            I would rather{" "}
            <span>
              {" "}
              <a href="#">Sign up</a>{" "}
            </span>{" "}
          </p>{" "}
          <a class="text-back" href="#">
            {" "}
            &lt; Back home{" "}
          </a>{" "}
        </>
      </div>{" "}
      <div className="signup-image">
        {" "}
        <img src={imageHolder} alt="Signup" />{" "}
      </div>{" "}
    </div>
  );
}

export default Signup;
