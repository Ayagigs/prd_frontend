import React from "react";
import "./Signup.css";
import imageHolder from "./images/Image-holder.svg";

function Signup() {
  return (
    <div className="signup-container">
      {" "}
      <div className="signup-info">
        {" "}
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
          <div className="buttons">
            {" "}
            <button className="back-Button" type="button">
              {" "}
              Back{" "}
            </button>{" "}
            <button className="submit-Button" type="submit">
              {" "}
              Next{" "}
            </button>{" "}
          </div>{" "}
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
        </form>{" "}
      </div>{" "}
      <div className="signup-image">
        {" "}
        <img src={imageHolder} alt="Signup" />{" "}
      </div>{" "}
    </div>
  );
}

export default Signup;
