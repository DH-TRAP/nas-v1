import React, { useEffect, useState } from "react";
// import Vector from "../assets/Vector.png";
// import logo from "../assets/logo.png"
import "./Homepage.css";
// import loksabha from '../assets/logo.png'
const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container landing_parent">
        <img src='#' alt="" className="Landing_bg" />

        <div className="landing_body">
          {windowWidth > 430 ? (
            <>
              <h1>Welcome to NAGRIK & SAMVIDHAN</h1>
              
            </>
          ) : (
            <h1>
              We connect Students <span>you</span>
            </h1>
          )}

          {windowWidth > 430 ? (
            <p>
              Welcome to <span>NAGRIK & SAMVIDHAN</span>, a platform for Simplyfing the Constitution for every Citizen
            </p>
          ) : (
            <p>
              A platform for NGOs, charities, clubs and you to collaborate, grow
              and build a better tomorrow.
            </p>
          )}

          <div className="landing_ctadiv">
            

            <div className="separator"></div>

            <div className="landing_ctaimgdiv">
              
              <span>Trusted by 100+ Students and Citizens.</span>
            </div>
          </div>
          <div className="container-fluid">
            <center>
              <h3>The Temple of Democracy</h3>
            </center>
            <div className="col-lg-6">
              <div className="">
                <img src='#' alt="" width="100px" />
              </div>
            </div>
            <div className="col-lg-6"></div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;