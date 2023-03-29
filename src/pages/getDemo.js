import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/getDemo.css'

function GetDemo() {
  return (
    <div className="body">

      <div className="container">
        {" "}
        <div className="left">
          {" "}
          <div className="left-style">
            {" "}
            <h3>Book a demo with us</h3>{" "}
            <p className="first-text">Have a 30 minute chat with us</p>{" "}
            <div className="form-input">
              {" "}
              <label htmlFor="firstname">Fullname</label>{" "}
              <input type="text" id="firstname" name="firstname" />{" "}
            </div>{" "}
            <div className="form-input">
              {" "}
              <label htmlFor="email">Work email</label>{" "}
              <input type="email" id="email" name="email" />{" "}
            </div>{" "}
            <div className="form-input">
              {" "}
              <label htmlFor="location">Location</label>{" "}
              <input type="text" id="location" name="location" />{" "}
            </div>{" "}
            <div className="form-input">
              {" "}
              <label htmlFor="companyname">Company name</label>{" "}
              <input type="text" id="companyname" name="companyname" />{" "}
            </div>{" "}
            <div className="policy">
              {" "}
              Before you submit this form submitting check if you agree with the
              company’s <a href="/demo">Privacy Policy</a>{" "}
            </div>{" "}
            <button className="btn">Request a demo</button>{" "}
            <p className="demo_last_text">
              {" "}
              I would rather{" "}
              <span>
                {" "}
                <NavLink to="/register">Sign up</NavLink>{" "}
              </span>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="right">
          {" "}
          <h2>
            {" "}
            Watch a short demo on youtube <div className="arrow-line"></div>{" "}
          </h2>{" "}
          <div className="video">
            {" "}
            <iframe
              width="600"
              height="315"
              src="https://www.youtube.com/embed/ZrEYFWP8vC8"
              title="YouTube video player"
              frameBorder="50"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default GetDemo;
