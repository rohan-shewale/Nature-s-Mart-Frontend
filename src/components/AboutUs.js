import React from "react";
import "../assets/css/aboutus.css";
import kundan from "../assets/images/Profile/kundan.jpg"
import vikram from "../assets/images/Profile/vikram.png"
import pooja from "../assets/images/Profile/pooja.jpg"
import BHAGYASHRI from "../assets/images/Profile/Bhagyashri.jpg"
import PRATHMESH from "../assets/images/Profile/prathamesh.png"
import rohan from "../assets/images/Profile/rohan.jpg"

function AboutUs() {
  return (
    <>
      <section>
        <div className="row">
          <h1>Our Team</h1>
        </div>
        <div className="row">
          {/* Column 1 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={vikram} />
              </div>
              <h3>VIKRAM NIKAM</h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>230340320130</p>
              <div className="icons"></div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={rohan} />
              </div>
              <h3>ROHAN SHEWALE</h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>230340520075</p>

              <div className="icons"></div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={kundan}/>
              </div>
              <h3>KUNDAN WAGHULADE</h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>Kundan Waghulade</p>
              <div className="icons"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Column 1 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={BHAGYASHRI} />
              </div>
              <h3>BHAGYASHRI SHINGOTE</h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>230340520021</p>
              <div className="icons"></div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={pooja} />
              </div>
              <h3>POOJA KADAM</h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>230340320069</p>

              <div className="icons"></div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="column">
            <div className="card-about">
              <div className="img-container-about">
                <img src={PRATHMESH} />
              </div>
              <h3>PRATHMESH JAGTAP </h3>
              <p>Software Developer</p>
              <strong style={{}}>PRN:</strong>
              <p>230340520066</p>
              <div className="icons"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
